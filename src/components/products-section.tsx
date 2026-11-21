import Link from "next/link";

import { AnimateIn } from "@/components/animate-in";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/products";

export function ProductsSection() {
  return (
    <section id="materiel" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <AnimateIn>
            <p className="text-xs font-bold tracking-[0.32em] text-forest uppercase">
              Catalogue
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] font-bold text-chocolate-deep uppercase">
              Le matériel
              <span className="block text-forest">à réserver.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-sm text-muted-foreground">
              Les grandes catégories de matériel. Le détail se confirme dans
              une soumission, pour un particulier comme pour un événement
              d’entreprise.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <AnimateIn key={category.id} delay={index * 0.08} className="h-full">
              <CategoryCard category={category} heading="h3" />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/produits"
            className="inline-flex h-14 items-center justify-center rounded-md bg-chocolate-deep px-8 text-[0.78rem] font-bold tracking-[0.18em] text-beige uppercase hover:bg-chocolate"
          >
            Toutes les catégories
          </Link>
          <Link
            href="/devis"
            className="inline-flex h-14 items-center justify-center rounded-md border border-chocolate-deep px-8 text-[0.78rem] font-bold tracking-[0.18em] text-chocolate-deep uppercase hover:bg-chocolate-deep hover:text-beige"
          >
            Devis événement
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
