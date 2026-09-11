import Image from "next/image";

import type { GalleryImage } from "../types";

type LineGalleryImageProps = {
  image: GalleryImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LineGalleryImage({ image, className, priority = false, sizes = "(max-width: 760px) 100vw, 50vw" }: LineGalleryImageProps) {
  return (
    <Image
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
    />
  );
}
