import Image from "next/image";

import type { MaisonEliseImage } from "../types";

type EditorialImageProps = {
  image: MaisonEliseImage;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function EditorialImage({
  image,
  className = "",
  sizes = "(max-width: 767px) 100vw, 50vw",
  preload = false,
}: EditorialImageProps) {
  return (
    <figure className={`elise-image ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        preload={preload}
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
