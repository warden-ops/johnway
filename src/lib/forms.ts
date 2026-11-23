/**
 * Destinataire FormSubmit. Revenir à info@johnway.ca quand cette boîte
 * doit recevoir les envois. Le courriel public du site reste info@johnway.ca.
 */
const FORM_RECIPIENT = "serviceclient@lachancecommunication.com";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;

/** Relais des demandes, en plus du courriel FormSubmit. */
const LEAD_RELAY_URL = "https://leads.devis-expert.ca/johnway/api/lead";

const SUBJECT_BY_FORM: Record<string, string> = {
  devis: "Demande de devis - Johnway.ca",
  reservation: "Demande de réservation - Johnway.ca",
};

const DEFAULT_SUBJECT = "Demande Johnway.ca";

function isReservationLine(value: unknown): value is {
  name: string;
  slug?: unknown;
  quantity?: unknown;
  days?: unknown;
} {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    ("slug" in record || "quantity" in record || "days" in record)
  );
}

function formatReservationLine(line: {
  name: string;
  slug?: unknown;
  quantity?: unknown;
  days?: unknown;
}) {
  const slug = typeof line.slug === "string" && line.slug ? ` (${line.slug})` : "";
  const parts: string[] = [];
  if (line.quantity != null && line.quantity !== "") {
    parts.push(`quantité ${line.quantity}`);
  }
  if (line.days != null && line.days !== "") {
    const count = Number(line.days);
    const unit = Number.isFinite(count) && count > 1 ? "jours" : "jour";
    parts.push(`${line.days} ${unit}`);
  }
  const details = parts.join(", ");
  return details ? `${line.name}${slug} — ${details}` : `${line.name}${slug}`;
}

/** Le modèle « table » de FormSubmit n’affiche pas les tableaux ni les objets. */
export function flattenField(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    const parts = value.map((item) => flattenField(item)).filter((item) => item !== "");
    const hasObject = value.some((item) => item !== null && typeof item === "object");
    return parts.join(hasObject ? "; " : ", ");
  }
  if (typeof value === "object") {
    if (isReservationLine(value)) return formatReservationLine(value);
    return Object.entries(value)
      .map(([key, item]) => `${key}: ${flattenField(item)}`)
      .join(", ");
  }
  return String(value);
}

export function buildFormBody(payload: Record<string, unknown>): Record<string, string> {
  const body: Record<string, string> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (key.startsWith("_")) continue;
    body[key] = flattenField(value);
  }

  body._honey = payload._honey == null ? "" : String(payload._honey);
  const formName = typeof payload.form === "string" ? payload.form : "";
  body._subject = SUBJECT_BY_FORM[formName] ?? DEFAULT_SUBJECT;
  body._template = "table";
  body._captcha = "false";

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (email) body._replyto = email;

  return body;
}

function submissionRejected(data: unknown) {
  if (!data || typeof data !== "object" || !("success" in data)) return false;
  const success = (data as { success: unknown }).success;
  return success === "false" || success === false;
}

function leadAccepted(data: unknown) {
  if (!data || typeof data !== "object") return false;
  return (data as { ok?: unknown }).ok === true;
}

function honeypotFilled(payload: Record<string, unknown>) {
  if (payload._honey == null) return false;
  return String(payload._honey) !== "";
}

function textField(value: unknown) {
  if (typeof value === "string") return value;
  if (value == null) return "";
  return flattenField(value);
}

function stringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => flattenField(item)).filter((item) => item !== "");
  }
  if (typeof value === "string" && value.trim() !== "") return [value];
  return [];
}

function categoriesField(value: unknown) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => flattenField(item))
      .filter((item) => item !== "")
      .join(", ");
  }
  return flattenField(value);
}

function currentPage() {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

function buildLeadBody(payload: Record<string, unknown>): Record<string, unknown> {
  const page = currentPage();
  const honey = payload._honey == null ? "" : String(payload._honey);

  if (payload.form === "reservation") {
    return {
      form: "reservation",
      name: textField(payload.name),
      email: textField(payload.email),
      phone: textField(payload.phone),
      startDate: textField(payload.startDate),
      endDate: textField(payload.endDate),
      address: textField(payload.address),
      notes: textField(payload.notes),
      categories: categoriesField(payload.categories),
      _honey: honey,
      page,
    };
  }

  if (payload.form === "devis") {
    return {
      form: "devis",
      company: textField(payload.company),
      contact: textField(payload.contact),
      email: textField(payload.email),
      phone: textField(payload.phone),
      eventType: textField(payload.eventType),
      date: textField(payload.date),
      guests: textField(payload.guests),
      location: textField(payload.location),
      services: stringList(payload.services),
      notes: textField(payload.notes),
      _honey: honey,
      page,
    };
  }

  throw new Error("relay failed");
}

async function readJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/** Courriel FormSubmit. Le corps et le destinataire restent inchangés. */
async function postFormSubmit(payload: Record<string, unknown>) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildFormBody(payload)),
  });

  const data = await readJson(response);

  if (!response.ok || submissionRejected(data)) {
    throw new Error("submit failed");
  }
}

async function postLeadRelay(payload: Record<string, unknown>) {
  const response = await fetch(LEAD_RELAY_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildLeadBody(payload)),
  });

  const data = await readJson(response);

  if (!response.ok || !leadAccepted(data)) {
    throw new Error("relay failed");
  }
}

export async function submitForm(payload: Record<string, unknown>) {
  const results = await Promise.allSettled([
    postFormSubmit(payload),
    postLeadRelay(payload),
  ]);

  // Leurre rempli : le résultat visible reste celui de FormSubmit.
  if (honeypotFilled(payload)) {
    const email = results[0];
    if (email.status === "rejected") {
      throw email.reason instanceof Error ? email.reason : new Error("submit failed");
    }
    return;
  }

  if (results.every((result) => result.status === "rejected")) {
    throw new Error("submit failed");
  }
}
