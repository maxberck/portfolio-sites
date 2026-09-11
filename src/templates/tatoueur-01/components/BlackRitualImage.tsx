import Image from "next/image";

import type { RitualImage } from "../types";

type BlackRitualImageProps = {
  image: RitualImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BlackRitualImage({ image, className, priority = false, sizes = "(max-width: 760px) 100vw, 50vw" }: BlackRitualImageProps) {
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
