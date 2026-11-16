"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CoverImage } from "@/components/cover-image";
import { PriceRequest } from "@/components/price-request";
import { Badge } from "@/components/ui/badge";
import { categories, products, type ProductCategory } from "@/lib/products";

export default function ProduitsPage() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const list = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-bold tracking-[0.32em] text-forest uppercase">
          Catalogue
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.88] font-bold text-chocolate-deep uppercase">
          Matériel
          <span className="block text-forest">disponible.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Chaque fiche décrit le matériel, ce qui est inclus et les options.
          Le montant est confirmé dans une soumission, selon la date et le site.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              className={`h-10 rounded-md px-4 text-[0.7rem] font-bold tracking-[0.14em] uppercase ${
                filter === category.id
                  ? "bg-chocolate-deep text-beige"
                  : "border border-chocolate/20 bg-card text-chocolate hover:border-forest"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-16 text-muted-foreground">Aucun produit dans cette catégorie.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden bg-card shadow-[0_16px_40px_rgba(26,16,12,0.07)]"
              >
                <Link href={`/produits/${product.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <CoverImage
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3">
                      {product.installIncluded ? "Install. incluse" : "Option install."}
                    </Badge>
                  </div>
                  <div className="px-5 pt-5">
                    <p className="text-[0.68rem] tracking-[0.16em] text-gold uppercase">
                      {product.tagline}
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-bold text-chocolate-deep uppercase">
                      {product.name}
                    </h2>
                  </div>
                </Link>
                <PriceRequest className="px-5 pt-4 pb-5" />
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
