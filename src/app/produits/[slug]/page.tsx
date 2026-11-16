import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { AddToReservation } from "@/components/add-to-reservation";
import { CoverImage } from "@/components/cover-image";
import { PriceRequest } from "@/components/price-request";
import { Badge } from "@/components/ui/badge";
import { categoryLabel, getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produit" };
  return {
    title: product.name,
    description: `${product.description} Prix sur demande.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-chocolate-deep">
          <CoverImage
            src={product.image}
            alt={product.imageAlt ?? product.name}
            priority
          />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.28em] text-forest uppercase">
            {categoryLabel[product.category]}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.9] font-bold text-chocolate-deep uppercase">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>
          <PriceRequest variant="detail" className="mt-6" />
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>{product.installNote}</Badge>
            {product.capacity ? (
              <Badge variant="gold">{product.capacity}</Badge>
            ) : null}
            {product.size ? <Badge variant="beige">{product.size}</Badge> : null}
          </div>
          <p className="mt-6 leading-relaxed text-chocolate/90">
            {product.description}
          </p>
          <div className="mt-8">
            <AddToReservation product={product} />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            La réservation bloque une demande de dates. Le montant est confirmé
            dans la soumission, avant l’installation.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-chocolate-deep uppercase">
            Inclus
          </h2>
          <ul className="mt-3 space-y-2 text-chocolate/85">
            {product.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-chocolate-deep uppercase">
            Fiche technique
          </h2>
          <dl className="mt-3 space-y-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 border-b border-chocolate/10 py-2 text-sm">
                <dt className="text-muted-foreground">{spec.label}</dt>
                <dd className="text-right font-medium text-chocolate-deep">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-chocolate-deep uppercase">
            Options
          </h2>
          {product.options.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-chocolate/90">
              {product.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Les options se précisent dans la soumission.
            </p>
          )}
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-chocolate-deep uppercase">
            Dans la même famille
          </h2>
          <div
            className={`mt-6 grid gap-5 ${
              related.length >= 3
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : related.length === 2
                  ? "sm:grid-cols-2"
                  : "max-w-md"
            }`}
          >
            {related.map((item) => (
              <article key={item.slug} className="bg-card">
                <Link href={`/produits/${item.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <CoverImage
                      src={item.image}
                      alt={item.imageAlt ?? item.name}
                    />
                  </div>
                  <p className="px-4 pt-4 font-display text-xl font-bold uppercase">
                    {item.name}
                  </p>
                </Link>
                <PriceRequest variant="compact" className="px-4 pt-2 pb-4" />
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
