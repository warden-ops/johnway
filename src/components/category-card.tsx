import Link from "next/link";

import { CoverImage } from "@/components/cover-image";
import { quoteHref, type Category } from "@/lib/products";

export function CategoryCard({
  category,
  heading = "h2",
  anchored = false,
}: {
  category: Category;
  heading?: "h2" | "h3";
  anchored?: boolean;
}) {
  const Heading = heading;

  return (
    <article
      id={anchored ? category.id : undefined}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden bg-card shadow-[0_20px_50px_rgba(26,16,12,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <CoverImage
          src={category.image}
          alt={category.imageAlt}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pt-5 pb-5">
        <Heading className="font-display text-3xl leading-none font-bold text-chocolate-deep uppercase">
          {category.label}
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-chocolate/80">
          {category.description}
        </p>
        <Link
          href={quoteHref(category.label)}
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-chocolate-deep px-4 py-3 text-center text-[0.72rem] leading-snug font-bold tracking-[0.14em] text-beige uppercase hover:bg-chocolate"
        >
          Demander une soumission
        </Link>
      </div>
    </article>
  );
}
