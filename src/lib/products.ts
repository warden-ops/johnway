export type ProductCategory =
  | "tentes"
  | "sono"
  | "animation"
  | "mobilier"
  | "eclairage"
  | "energie";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  tagline: string;
  capacity?: string;
  size?: string;
  image: string;
  imageAlt?: string;
  featured: boolean;
  installIncluded: boolean;
  installNote: string;
  description: string;
  includes: string[];
  specs: { label: string; value: string }[];
  options: string[];
};

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "tentes", label: "Tentes & chapiteaux" },
  { id: "sono", label: "Sono & scène" },
  { id: "animation", label: "Animation" },
  { id: "mobilier", label: "Mobilier" },
  { id: "eclairage", label: "Éclairage" },
  { id: "energie", label: "Énergie" },
];

export const products: Product[] = [
  {
    slug: "tente-pliante-3x3",
    name: "Tente pliante 3 × 3 m",
    shortName: "3 × 3 m",
    category: "tentes",
    tagline: "Cocktail, kiosque, entrée de site",
    capacity: "12 à 16 personnes",
    size: "3 × 3 m",
    image: "/images/wedding-garden.jpg",
    featured: true,
    installIncluded: false,
    installNote: "Livraison et installation en option",
    description:
      "Tente pliante professionnelle, structure aluminium et toile 600D. Idéale pour un bar extérieur, un kiosque de festival ou un abri d’accueil. Montage rapide, ancrage compris.",
    includes: ["Structure aluminium", "Toile blanche", "Sacs de transport", "Poids d’ancrage"],
    specs: [
      { label: "Dimensions", value: "3 × 3 m · 2,6 m au faîte" },
      { label: "Toile", value: "Polyester 600D, ignifuge" },
      { label: "Parois", value: "En option" },
      { label: "Délai", value: "Réservation 48 h à l’avance" },
    ],
    options: [
      "Parois latérales (4)",
      "Guirlandes LED",
    ],
  },
  {
    slug: "tente-pliante-3x6",
    name: "Tente pliante 3 × 6 m",
    shortName: "3 × 6 m",
    category: "tentes",
    tagline: "Buffet, inscription, coin lounge",
    capacity: "24 à 32 personnes",
    size: "3 × 6 m",
    image: "/images/outdoor-dining.jpg",
    featured: true,
    installIncluded: false,
    installNote: "Livraison et installation en option",
    description:
      "Double module 3 × 6 m pour un buffet, un vestiaire ou un espace photo. Toile tendue, look propre, prête pour un mariage de jardin ou un corporatif en terrasse.",
    includes: ["Deux modules couplés", "Toile blanche", "Ancrage", "Sacs de transport"],
    specs: [
      { label: "Dimensions", value: "3 × 6 m" },
      { label: "Hauteur", value: "2,6 m au faîte" },
      { label: "Plancher", value: "Non inclus" },
      { label: "Vent", value: "Ancrage obligatoire dès 30 km/h" },
    ],
    options: [
      "Parois complètes",
      "Plancher bois 3 × 6",
    ],
  },
  {
    slug: "chapiteau-5x10",
    name: "Chapiteau 5 × 10 m",
    shortName: "5 × 10 m",
    category: "tentes",
    tagline: "Réception 40 à 60 convives",
    capacity: "40 à 60 personnes",
    size: "5 × 10 m",
    image: "/images/chapiteaux/produit-chapiteau-5x10-jardin.jpg",
    imageAlt: "Chapiteau blanc à deux pointes installé dans un jardin",
    featured: true,
    installIncluded: true,
    installNote: "Installation et démontage inclus",
    description:
      "Chapiteau structure aluminium, toile tendue, pour un cocktail dînatoire ou un dîner assis. Notre équipe installe, ancre et reprend le lendemain. Clé en main, sans improvisation.",
    includes: [
      "Structure et toile",
      "Installation et démontage",
      "Ancrage ou lestage",
      "Éclairage de base",
    ],
    specs: [
      { label: "Dimensions", value: "5 × 10 m · 50 m²" },
      { label: "Assis", value: "40 à 50 places" },
      { label: "Debout", value: "jusqu’à 70" },
      { label: "Délai", value: "7 jours recommandés" },
    ],
    options: [
      "Parois cristal",
      "Plancher 5 × 10",
      "Chauffage",
    ],
  },
  {
    slug: "chapiteau-10x20",
    name: "Chapiteau 10 × 20 m",
    shortName: "10 × 20 m",
    category: "tentes",
    tagline: "Mariage, gala, festival",
    capacity: "150 à 220 personnes",
    size: "10 × 20 m",
    image: "/images/chapiteaux/produit-chapiteau-10x20-reception.jpg",
    imageAlt: "Chapiteau de réception dressé pour un banquet, tables et chaises sous la toile",
    featured: true,
    installIncluded: true,
    installNote: "Installation, ancrage et démontage inclus",
    description:
      "Le format signature pour un mariage de 150 personnes ou une scène de festival. Structure professionnelle, toile blanche, éclairage architectural. On arrive en convoi, on installe, vous célebrez.",
    includes: [
      "Chapiteau 10 × 20 m",
      "Installation complète",
      "Ancrage / lestage",
      "Éclairage architectural",
      "Reprise et nettoyage",
    ],
    specs: [
      { label: "Surface", value: "200 m²" },
      { label: "Assis banquet", value: "150 à 180" },
      { label: "Debout", value: "jusqu’à 250" },
      { label: "Délai", value: "14 jours recommandés" },
    ],
    options: [
      "Parois cristal",
      "Plancher complet",
      "Scène 4 × 6 m",
    ],
  },
  {
    slug: "tente-stretch",
    name: "Tente stretch 8 × 12 m",
    shortName: "Stretch",
    category: "tentes",
    tagline: "Look festival, photo-ready",
    capacity: "60 à 90 personnes",
    size: "8 × 12 m",
    image: "/images/cocktail.jpg",
    featured: true,
    installIncluded: true,
    installNote: "Installation incluse",
    description:
      "Toile stretch sculpturale pour un cocktail, un after ou un village festival. Silhouette organique, éclairage qui accroche le tissu, impact visuel immédiat.",
    includes: ["Toile stretch", "Mâts et haubans", "Installation", "Éclairage d’ambiance"],
    specs: [
      { label: "Emprise", value: "environ 8 × 12 m" },
      { label: "Look", value: "Organique, photo-ready" },
      { label: "Sol", value: "Gazon, gravier, asphalte" },
      { label: "Délai", value: "10 jours" },
    ],
    options: [
      "Guirlandes festives",
      "Lounge 8 places",
    ],
  },
  {
    slug: "pagode-5x5",
    name: "Pagode 5 × 5 m",
    shortName: "Pagode",
    category: "tentes",
    tagline: "Cérémonie, bar, photo booth",
    capacity: "20 à 30 personnes",
    size: "5 × 5 m",
    image: "/images/chapiteaux/produit-pagode-5x5-pelouse.jpg",
    imageAlt: "Pagodes blanches posées sur une pelouse",
    featured: false,
    installIncluded: true,
    installNote: "Installation incluse",
    description:
      "Pagode haute, lignes nettes. Parfaite comme chapelle de cérémonie, bar VIP ou point de rencontre. On la place, on l’éclaire, elle devient le décor.",
    includes: ["Pagode 5 × 5", "Toile et jupes", "Installation", "Éclairage intérieur"],
    specs: [
      { label: "Base", value: "5 × 5 m" },
      { label: "Hauteur faîte", value: "5 m" },
      { label: "Usage", value: "Cérémonie, bar, accueil" },
      { label: "Délai", value: "7 jours" },
    ],
    options: [
      "Parois cristal",
      "Tapis de cérémonie",
    ],
  },
  {
    slug: "photo-booth",
    name: "Photo booth",
    shortName: "Photo booth",
    category: "animation",
    tagline: "Mariage, fête, corporatif",
    image: "/images/chapiteaux/produit-photo-booth.jpg",
    imageAlt:
      "Quatre invités posent devant un rideau de franges métalliques, sur une planche de photo booth",
    featured: true,
    installIncluded: true,
    installNote: "Installation et reprise incluses",
    description:
      "Borne photo pour un mariage, une fête ou un corporatif. Les invités posent avec les accessoires et repartent avec une impression ou un lien vers la galerie. On installe le fond, on reprend le lendemain.",
    includes: [
      "Borne photo",
      "Impressions instantanées ou partage numérique",
      "Accessoires",
      "Fond",
      "Galerie numérique",
    ],
    specs: [
      { label: "Usage", value: "Mariage, fête, corporatif" },
      { label: "Souvenirs", value: "Impression ou galerie numérique" },
      { label: "Fond", value: "Inclus" },
      { label: "Préposé", value: "En option" },
    ],
    options: [
      "Préposé sur place",
      "Fond personnalisé",
      "Accessoires supplémentaires",
    ],
  },
  {
    slug: "sono-200",
    name: "Système sono 200 personnes",
    shortName: "Sono 200",
    category: "sono",
    tagline: "Mariage, cocktail, conférence",
    capacity: "jusqu’à 200 personnes",
    image: "/images/speakers.jpg",
    featured: true,
    installIncluded: true,
    installNote: "Câblage et réglage inclus",
    description:
      "Deux tops, un sub, console numérique, micros sans fil. Assez de punch pour un premier dancefloor, assez propre pour un discours. On règle, vous jouez.",
    includes: ["2 tops + 1 sub", "Console", "2 micros sans fil", "Pieds et câbles", "Réglage"],
    specs: [
      { label: "Couverture", value: "jusqu’à 200 personnes" },
      { label: "Entrées", value: "Bluetooth, jack, XLR" },
      { label: "Technicien", value: "En option" },
      { label: "Délai", value: "48 h" },
    ],
    options: [
      "Technicien sur place",
      "Micro cravate extra",
    ],
  },
  {
    slug: "sono-500",
    name: "Système sono 500 personnes",
    shortName: "Sono 500",
    category: "sono",
    tagline: "Festival, plein air, corporatif",
    capacity: "jusqu’à 500 personnes",
    image: "/images/concert.jpg",
    featured: true,
    installIncluded: true,
    installNote: "Installation et line check inclus",
    description:
      "Line-up festival : tops, subs, retours, console. Conçu pour un champ, un stationnement, un parc municipal. On arrive, on aligne, ça porte.",
    includes: ["Line array compact + subs", "Console 16 voies", "Micros", "Line check"],
    specs: [
      { label: "Couverture", value: "jusqu’à 500 personnes" },
      { label: "Alimentation", value: "30 A recommandé" },
      { label: "Technicien", value: "Fortement recommandé" },
      { label: "Délai", value: "7 jours" },
    ],
    options: [
      "Technicien (bloc 4 h)",
      "Retours de scène",
    ],
  },
  {
    slug: "tables-chaises",
    name: "Pack tables + chaises (10 places)",
    shortName: "Tables",
    category: "mobilier",
    tagline: "Dîner assis, clé en main",
    image: "/images/outdoor-dining.jpg",
    featured: false,
    installIncluded: false,
    installNote: "Mise en place en option",
    description:
      "Une table ronde 60 po, nappe sable, dix chaises banquet. Multipliez le pack selon vos invités. Simple, propre, prêt à dresser.",
    includes: ["1 table ronde 60 po", "Nappe", "10 chaises banquet"],
    specs: [
      { label: "Places", value: "10 par pack" },
      { label: "Nappe", value: "Sable / ivoire" },
      { label: "Livraison", value: "Selon secteur" },
      { label: "Délai", value: "72 h" },
    ],
    options: [
      "Housses de chaises",
      "Centre de table",
    ],
  },
  {
    slug: "eclairage-ambiance",
    name: "Pack éclairage ambiance",
    shortName: "Lumière",
    category: "eclairage",
    tagline: "Guirlandes, uplights, punch",
    image: "/images/festival.jpg",
    featured: true,
    installIncluded: true,
    installNote: "Installation et programmation incluses",
    description:
      "Uplights forest et chocolat, guirlandes, wash de scène. On sculpte le chapiteau, le jardin, la façade. L’événement change de registre dès que ça s’allume.",
    includes: ["8 uplights", "Guirlandes 20 m", "Contrôleur", "Installation"],
    specs: [
      { label: "Look", value: "Chaud, architectural" },
      { label: "Alimentation", value: "15 A" },
      { label: "Extérieur", value: "Oui, IP65" },
      { label: "Délai", value: "72 h" },
    ],
    options: [
      "Lyres extra (paire)",
      "Projecteur logo",
    ],
  },
  {
    slug: "generatrice-6500",
    name: "Génératrice 6500 W",
    shortName: "Gén. 6500 W",
    category: "energie",
    tagline: "Site hors réseau, festival, champ",
    image: "/images/truck.jpg",
    featured: false,
    installIncluded: false,
    installNote: "Livraison et mise en route",
    description:
      "Quand le champ n’a pas de prise. 6500 W insonorisée, assez pour sono, éclairage et bar. On livre, on démarre, on reprend.",
    includes: ["Génératrice 6500 W", "Câbles de distribution", "Pleine d’essence au départ"],
    specs: [
      { label: "Puissance", value: "6500 W" },
      { label: "Bruit", value: "Insonorisée" },
      { label: "Autonomie", value: "8 à 10 h" },
      { label: "Délai", value: "48 h" },
    ],
    options: [
      "Essence extra (jerrican)",
      "Distribution 4 circuits",
    ],
  },
  {
    slug: "plancher-danse",
    name: "Plancher de danse 4 × 4 m",
    shortName: "Dancefloor",
    category: "mobilier",
    tagline: "Le premier slow, le dernier hit",
    image: "/images/scene.jpg",
    featured: false,
    installIncluded: true,
    installNote: "Installation incluse",
    description:
      "Plancher bois 4 × 4 m, surface stable, look soirée. On le pose dans le chapiteau ou en terrasse. Assez grand pour que ça parte.",
    includes: ["Modules 4 × 4 m", "Installation", "Finition bois"],
    specs: [
      { label: "Surface", value: "16 m²" },
      { label: "Finition", value: "Bois chêne" },
      { label: "Extérieur", value: "Oui, sous tente" },
      { label: "Délai", value: "5 jours" },
    ],
    options: [
      "Extension 4 × 8 m",
      "Éclairage dancefloor",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function featuredProducts() {
  return products.filter((product) => product.featured);
}

export const categoryLabel: Record<ProductCategory, string> = {
  tentes: "Tentes & chapiteaux",
  sono: "Sono & scène",
  animation: "Animation",
  mobilier: "Mobilier",
  eclairage: "Éclairage",
  energie: "Énergie",
};
