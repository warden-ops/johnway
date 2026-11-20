import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { legacyProductSlugs, legacyRedirect } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return legacyProductSlugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const target = legacyRedirect(slug);
  if (!target) return { title: "Matériel" };
  return {
    title: target.category.label,
    description: `Cette fiche est regroupée dans la catégorie ${target.category.label}.`,
    robots: { index: false, follow: true },
    alternates: { canonical: target.href },
  };
}

export default async function LegacyProductPage({ params }: Props) {
  const { slug } = await params;
  const target = legacyRedirect(slug);
  if (!target) notFound();

  return (
    <div className="bg-cream px-5 pt-32 pb-24">
      <meta httpEquiv="refresh" content={`0; url=${target.href}`} />
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-bold tracking-[0.28em] text-forest uppercase">
          Matériel
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[0.9] font-bold text-chocolate-deep uppercase">
          Fiche regroupée
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cette page renvoie vers la catégorie {target.category.label}.
        </p>
        <a
          href={target.href}
          className="mt-8 inline-flex h-12 items-center bg-chocolate-deep px-6 text-xs font-bold tracking-[0.16em] text-beige uppercase"
        >
          Voir {target.category.label}
        </a>
      </div>
    </div>
  );
}
