import type { Metadata } from "next";

import { ReservationForm } from "@/components/reservation-form";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Envoyez une demande de réservation. Indiquez les catégories de matériel, les dates et le site.",
};

export default function ReservationPage() {
  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-xs font-bold tracking-[0.32em] text-forest uppercase">
          Particuliers
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.88] font-bold text-chocolate-deep uppercase">
          Envoyer
          <span className="block text-forest">une réservation.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Catégories, dates, adresse. On confirme la disponibilité et les
          modalités dans la soumission. L’installation s’ajoute au besoin.
        </p>
        <div className="mt-12">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
