import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { CoverImage } from "@/components/cover-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImage = "/images/chapiteaux/service-cle-en-main-chapiteau-ceremonie.jpg";

export function Hero() {
  return (
    <section className="hero relative isolate flex min-h-[100svh] items-end overflow-hidden bg-chocolate-deep">
      <CoverImage
        src={heroImage}
        alt="Chapiteau blanc à pointes dans un jardin boisé, avec des chaises de cérémonie"
        priority
      />
      <div className="hero-grade absolute inset-0" />
      <div className="grain" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8 lg:pb-20">
        <p
          className="hero-line font-display text-sm font-semibold tracking-[0.42em] text-beige uppercase"
          style={{ ["--d" as string]: "0.1s" }}
        >
          Événementiel clé en main
        </p>
        <h1 className="mt-5 max-w-5xl">
          <span
            className="hero-line block font-display text-[clamp(3.4rem,12vw,8.75rem)] leading-[0.86] font-bold tracking-tight text-beige uppercase"
            style={{ ["--d" as string]: "0.35s" }}
          >
            Votre événement.
          </span>
          <span
            className="hero-line mt-1 block font-display text-[clamp(3.4rem,12vw,8.75rem)] leading-[0.86] font-bold tracking-tight text-beige uppercase"
            style={{ ["--d" as string]: "0.65s" }}
          >
            On s’occupe{" "}
            <span className="text-forest-bright">du reste.</span>
          </span>
        </h1>
        <p
          className="hero-line mt-8 max-w-xl text-lg text-beige/85 sm:text-xl"
          style={{ ["--d" as string]: "0.95s" }}
        >
          Chapiteaux, sono, installation et animation. On monte le site, vous
          célébrez.
        </p>
        <div
          className="hero-line mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ ["--d" as string]: "1.2s" }}
        >
          <Link
            href="/produits"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-14 rounded-md bg-forest-bright px-8 text-[0.78rem] font-bold tracking-[0.18em] text-beige uppercase hover:bg-forest",
            )}
          >
            Réserver du matériel
          </Link>
          <Link
            href="/devis"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-14 rounded-md border-beige/40 bg-transparent px-8 text-[0.78rem] font-bold tracking-[0.18em] text-beige uppercase hover:bg-beige hover:text-chocolate-deep",
            )}
          >
            Devis entreprise
          </Link>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-beige/70 md:flex"
      >
        <span className="text-[0.62rem] tracking-[0.28em] uppercase">
          Défiler
        </span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
