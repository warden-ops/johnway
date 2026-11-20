"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "@/lib/forms";
import { categories } from "@/lib/products";

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const selected = data.getAll("categories").map(String).filter(Boolean);

    if (selected.length === 0) {
      setStatus("error");
      setMessage("Choisissez au moins une catégorie.");
      return;
    }

    setStatus("loading");

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      startDate: String(data.get("startDate") || ""),
      endDate: String(data.get("endDate") || ""),
      address: String(data.get("address") || ""),
      notes: String(data.get("notes") || ""),
      categories: selected.join(", "),
    };

    try {
      await submitForm({ form: "reservation", ...payload });
      setStatus("success");
      setMessage(
        "Réservation envoyée. On confirme la disponibilité et les détails de livraison sous 24 h.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Envoi impossible. Réessayez ou écrivez à info@johnway.ca.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-forest/30 bg-forest-deep p-10 text-beige">
        <p className="font-display text-4xl font-bold uppercase">Reçu.</p>
        <p className="mt-4 max-w-lg text-lg text-beige/80">{message}</p>
        <Link
          href="/produits"
          className="mt-8 inline-flex h-12 items-center bg-forest-bright px-6 text-xs font-bold tracking-[0.16em] uppercase"
        >
          Voir le matériel
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <fieldset className="border border-chocolate/10 bg-card p-6">
        <legend className="px-2 font-display text-3xl font-bold text-chocolate-deep uppercase">
          Catégories
        </legend>
        <p className="mt-2 text-sm text-muted-foreground">
          Cochez ce dont vous avez besoin. Le détail se précise dans la
          soumission.
        </p>
        <div className="mt-5 grid gap-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                name="categories"
                value={category.label}
                className="size-4 accent-forest"
              />
              {category.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-4 border border-chocolate/10 bg-card p-6">
        <h2 className="font-display text-3xl font-bold text-chocolate-deep uppercase">
          Vos coordonnées
        </h2>
        <div>
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Courriel</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="startDate">Début</Label>
            <Input id="startDate" name="startDate" type="date" required />
          </div>
          <div>
            <Label htmlFor="endDate">Fin</Label>
            <Input id="endDate" name="endDate" type="date" required />
          </div>
        </div>
        <div>
          <Label htmlFor="address">Adresse de livraison / site</Label>
          <Input id="address" name="address" required placeholder="Adresse complète" />
        </div>
        <div>
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" name="notes" placeholder="Accès, horaire, installation…" />
        </div>
        {status === "error" ? (
          <p className="text-sm text-destructive">{message}</p>
        ) : null}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-14 w-full rounded-md bg-forest-bright text-[0.78rem] font-bold tracking-[0.18em] uppercase hover:bg-forest"
        >
          {status === "loading" ? "Envoi…" : "Envoyer la réservation"}
        </Button>
      </div>
    </form>
  );
}
