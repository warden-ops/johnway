import type { Metadata } from "next";

import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Matériel",
  description:
    "Catégories de matériel événementiel : tentes, chapiteaux, photo booth, sono, mobilier, éclairage, énergie et plancher de danse. Le détail se confirme dans une soumission.",
};

export default function ProduitsPage() {
  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-bold tracking-[0.32em] text-forest uppercase">
          Catalogue
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.88] font-bold text-chocolate-deep uppercase">
          Matériel
          <span className="block text-forest">par catégorie.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Une carte par grande famille. Le détail se confirme dans une
          soumission, selon la date et le site.
        </p>
        <nav aria-label="Catégories" className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex h-10 items-center rounded-md border border-chocolate/20 bg-card px-4 text-[0.7rem] font-bold tracking-[0.14em] text-chocolate uppercase hover:border-forest"
            >
              {category.label}
            </a>
          ))}
        </nav>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} anchored />
          ))}
        </div>
      </div>
    </div>
  );
}
