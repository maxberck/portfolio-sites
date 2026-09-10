import Image from "next/image";

import type { District88GalleryImage } from "@/src/templates/restaurant-02/types";

interface PosterImageProps {
  image: District88GalleryImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function PosterImage({ image, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: PosterImageProps) {
  return (
    <figure className={`d88-poster-image d88-poster-image--${image.aspect} ${className}`.trim()}>
      <div className="d88-poster-image__frame">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition: image.focalPosition ?? "center" }}
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
