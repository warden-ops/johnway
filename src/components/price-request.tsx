import Link from "next/link";

import { cn } from "@/lib/utils";

type PriceRequestProps = {
  variant?: "card" | "compact" | "detail" | "summary";
  className?: string;
};

export function PriceRequest({ variant = "card", className }: PriceRequestProps) {
  const prominent = variant === "detail" || variant === "summary";

  return (
    <div className={className}>
      <p
        className={cn(
          "font-display font-bold text-forest",
          variant === "detail" && "text-5xl sm:text-6xl",
          variant === "summary" && "text-4xl",
          variant === "card" && "text-3xl",
          variant === "compact" && "text-2xl",
        )}
      >
        Prix sur demande
      </p>
      <Link
        href="/devis"
        className={cn(
          "inline-flex items-center font-bold tracking-[0.16em] uppercase",
          prominent
            ? "mt-4 h-14 rounded-md bg-chocolate-deep px-8 text-[0.78rem] text-beige hover:bg-chocolate"
            : "mt-3 text-[0.72rem] text-chocolate-deep underline decoration-forest underline-offset-4 hover:text-forest",
        )}
      >
        Demander une soumission
      </Link>
    </div>
  );
}
