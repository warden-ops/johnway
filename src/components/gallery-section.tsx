import { AnimateIn } from "@/components/animate-in";
import { CoverImage } from "@/components/cover-image";
import { cn } from "@/lib/utils";

const shots = [
  {
    src: "/images/chapiteaux/galerie-chapiteaux-complexe-aerien.jpg",
    alt: "Complexe de chapiteaux blancs vu du ciel sur un grand terrain",
    caption: "Complexe aérien",
  },
  {
    src: "/images/chapiteaux/galerie-chapiteau-salle-parc.jpg",
    alt: "Grand chapiteau blanc installé dans un parc, près d’un pont",
    caption: "Salle dans un parc",
  },
  {
    src: "/images/chapiteaux/galerie-chapiteau-bord-riviere.jpg",
    alt: "Chapiteau blanc au bord d’une rivière, devant une colline boisée",
    caption: "Bord de rivière",
  },
  {
    src: "/images/chapiteaux/galerie-chapiteaux-site-riverain.jpg",
    alt: "Rangée de chapiteaux blancs le long d’une rivière, sur un site de festival",
    caption: "Site riverain",
  },
  {
    src: "/images/chapiteaux/galerie-kiosque-ceremonie-jardin.jpg",
    alt: "Kiosque blanc et chaises de cérémonie dans un jardin fleuri",
    caption: "Cérémonie au jardin",
  },
];

export function GallerySection() {
  return (
    <section id="realisations" className="bg-chocolate-deep py-24 text-beige">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateIn>
          <p className="text-xs font-bold tracking-[0.32em] text-forest-bright uppercase">
            Réalisations
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] font-bold uppercase">
            Chapiteaux posés sur le terrain
          </h2>
          <p className="mt-6 max-w-xl text-lg text-beige/80">
            Festivals, cérémonies et sites en plein air. Ces photos montrent
            des installations déjà livrées.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {shots.map((shot, index) => (
            <AnimateIn
              key={shot.src}
              delay={index * 0.08}
              className={cn(
                index === 0 ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2",
              )}
            >
              <figure>
                <div className="group relative aspect-[3/2] overflow-hidden bg-chocolate">
                  <CoverImage
                    src={shot.src}
                    alt={shot.alt}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-sm tracking-wide text-beige/75">
                  {shot.caption}
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
