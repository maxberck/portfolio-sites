import Image from "next/image";

import type { MatiereImage as MatiereImageData } from "../types";

type MatiereImageProps = {
  image: MatiereImageData;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MatiereImage({ image, className, priority = false, sizes = "(max-width: 760px) 100vw, 70vw" }: MatiereImageProps) {
  return (
    <Image
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes={sizes}
      data-matiere-image
      style={{ objectPosition: image.objectPosition ?? "center" }}
    />
  );
}
