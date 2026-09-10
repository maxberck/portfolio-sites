/* eslint-disable @next/next/no-img-element */

import type { KuroImage } from "../types";

type EditorialImageProps = {
  image: KuroImage;
  className?: string;
  eager?: boolean;
};

export function EditorialImage({ image, className = "", eager = false }: EditorialImageProps) {
  return (
    <figure className={`kuro-image ${className}`.trim()}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}
