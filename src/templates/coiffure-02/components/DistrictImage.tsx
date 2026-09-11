import Image from "next/image";

import type { DistrictImageData } from "../types";

type DistrictImageProps = {
  image: DistrictImageData;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function DistrictImage({ image, className = "", sizes = "(max-width: 900px) 100vw, 50vw", priority = false }: DistrictImageProps) {
  return (
    <figure className={`district-image ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: image.position ?? "center" }}
      />
      {image.label ? <figcaption>{image.label}</figcaption> : null}
    </figure>
  );
}
