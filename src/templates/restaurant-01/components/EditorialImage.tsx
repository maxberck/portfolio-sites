import Image from "next/image";

import type { SilexImage } from "../types";

type EditorialImageProps = {
  image: SilexImage;
  className?: string;
  preload?: boolean;
  sizes?: string;
};

export function EditorialImage({
  image,
  className = "",
  preload = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: EditorialImageProps) {
  return (
    <figure className={`silex-image ${className}`.trim()}>
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
