export type CategoryId =
  | "tentes"
  | "chapiteaux"
  | "photo-booth"
  | "sono"
  | "mobilier"
  | "eclairage"
  | "energie"
  | "plancher";

export type Category = {
  id: CategoryId;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const categories: Category[] = [
  {
    id: "tentes",
    label: "Tentes",
    description:
      "Tentes pour kiosques, buffets, cocktails et accueil. On les livre et on les installe selon le terrain et le déroulement de la journée.",
    image: "/images/chapiteaux/produit-pagode-5x5-pelouse.jpg",
    imageAlt: "Tentes blanches à pointe posées sur une pelouse",
  },
  {
    id: "chapiteaux",
    label: "Chapiteaux",
    description:
      "Chapiteaux pour réceptions, cérémonies et rassemblements. Structure, toile et ancrage, installés et repris par l’équipe.",
    image: "/images/chapiteaux/produit-chapiteau-10x20-reception.jpg",
    imageAlt: "Chapiteau blanc de réception, tables dressées sous la toile",
  },
  {
    id: "photo-booth",
    label: "Photo booth",
    description:
      "Photo booth pour mariages, fêtes et événements corporatifs. Les invités posent et repartent avec un souvenir de la soirée.",
    image: "/images/chapiteaux/produit-photo-booth.jpg",
    imageAlt:
      "Invités posent devant un rideau de franges métalliques, sur une planche de photo booth",
  },
  {
    id: "sono",
    label: "Sono & scène",
    description:
      "Sonorisation et scène pour discours, musique et plein air. On installe, on règle, la voix et la musique portent sur le site.",
    image: "/images/concert.jpg",
    imageAlt: "Scène éclairée devant une foule, en plein air",
  },
  {
    id: "mobilier",
    label: "Mobilier",
    description:
      "Tables, chaises et nappes pour un repas assis ou un cocktail. La mise en place suit le plan de la soirée.",
    image: "/images/tables.jpg",
    imageAlt: "Tables dressées pour un repas",
  },
  {
    id: "eclairage",
    label: "Éclairage",
    description:
      "Éclairage d’ambiance pour chapiteaux, jardins et scènes. La lumière est installée pour le lieu et l’heure de l’événement.",
    image: "/images/festival.jpg",
    imageAlt: "Éclairage de scène au-dessus d’une foule",
  },
  {
    id: "energie",
    label: "Énergie / génératrices",
    description:
      "Alimentation temporaire pour les sites sans branchement suffisant. Génératrices livrées, mises en route et reprises après l’événement.",
    image: "/images/truck.jpg",
    imageAlt: "Camion en route vers un site",
  },
  {
    id: "plancher",
    label: "Plancher de danse",
    description:
      "Plancher de danse pour la soirée, posé sous le chapiteau ou à l’extérieur. Surface stable, installation comprise.",
    image: "/images/scene.jpg",
    imageAlt: "Soirée sous les projecteurs",
  },
];

/** Services already offered on the quote form, outside the matériel categories. */
export const extraQuoteServices = [
  "Installation",
  "Animation",
  "Coordination jour J",
] as const;

export const quoteServiceOptions = [
  ...categories.map((category) => category.label),
  ...extraQuoteServices,
];

export function quoteHref(label: string) {
  return `/devis?service=${encodeURIComponent(label)}`;
}

export function categoryHref(id: CategoryId) {
  return `/produits/#${id}`;
}

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}

/**
 * Former product slugs. Static pages at /produits/<slug>/ redirect to the
 * matching category so old links do not 404.
 */
export const legacyProductSlugs: { slug: string; categoryId: CategoryId }[] = [
  { slug: "tente-pliante-3x3", categoryId: "tentes" },
  { slug: "tente-pliante-3x6", categoryId: "tentes" },
  { slug: "tente-stretch", categoryId: "tentes" },
  { slug: "chapiteau-5x10", categoryId: "chapiteaux" },
  { slug: "chapiteau-10x20", categoryId: "chapiteaux" },
  { slug: "pagode-5x5", categoryId: "tentes" },
  { slug: "photo-booth", categoryId: "photo-booth" },
  { slug: "sono-200", categoryId: "sono" },
  { slug: "sono-500", categoryId: "sono" },
  { slug: "tables-chaises", categoryId: "mobilier" },
  { slug: "eclairage-ambiance", categoryId: "eclairage" },
  { slug: "generatrice-6500", categoryId: "energie" },
  { slug: "plancher-danse", categoryId: "plancher" },
];

export function legacyRedirect(slug: string) {
  const entry = legacyProductSlugs.find((item) => item.slug === slug);
  if (!entry) return null;
  const category = getCategory(entry.categoryId);
  if (!category) return null;
  return { category, href: categoryHref(category.id) };
}
