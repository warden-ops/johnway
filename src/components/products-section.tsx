import Link from "next/link";

import { AnimateIn } from "@/components/animate-in";
import { CoverImage } from "@/components/cover-image";
import { PriceRequest } from "@/components/price-request";
import { Badge } from "@/components/ui/badge";
import { featuredProducts } from "@/lib/products";

export function ProductsSection() {
  const items = featuredProducts().slice(0, 6);

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
              Fiches détaillées et demande en ligne. Le montant se confirme
              dans une soumission, pour un particulier comme pour un événement
              d’entreprise.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, index) => (
            <AnimateIn key={product.slug} delay={index * 0.08}>
              <article className="group overflow-hidden bg-card shadow-[0_20px_50px_rgba(26,16,12,0.08)]">
                <Link href={`/produits/${product.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <CoverImage
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3">
                      {product.installIncluded ? "Install. incluse" : "Self + option"}
                    </Badge>
                  </div>
                  <div className="px-5 pt-5">
                    <p className="text-[0.68rem] tracking-[0.16em] text-gold uppercase">
                      {product.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-3xl font-bold text-chocolate-deep uppercase">
                      {product.name}
                    </h3>
                  </div>
                </Link>
                <PriceRequest className="px-5 pt-4 pb-5" />
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/produits"
            className="inline-flex h-14 items-center justify-center rounded-md bg-chocolate-deep px-8 text-[0.78rem] font-bold tracking-[0.18em] text-beige uppercase hover:bg-chocolate"
          >
            Tout le catalogue
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
