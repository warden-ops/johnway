import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function webpTwin(src: string) {
  if (src.startsWith("/images/chapiteaux/") && src.endsWith(".jpg")) {
    return src.replace(/\.jpg$/, ".webp");
  }
  return null;
}

/**
 * Fills a positioned parent. Chapiteaux photos ship as WebP + JPG;
 * static export keeps next/image unoptimized, so format choice is a
 * picture element rather than the image optimizer.
 */
export function CoverImage({
  src,
  alt,
  className,
  priority = false,
}: CoverImageProps) {
  const webp = webpTwin(src);

  return (
    <picture className="absolute inset-0 block size-full">
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("size-full object-cover", className)}
      />
    </picture>
  );
}
