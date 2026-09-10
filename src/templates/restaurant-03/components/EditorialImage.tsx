import Image from "next/image";

import type { TerraImage } from "@/src/templates/restaurant-03/types";

type EditorialImageProps = {
  image: TerraImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({ image, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: EditorialImageProps) {
  return (
    <figure className={`terra-image terra-image--${image.aspect} ${className}`.trim()}>
      <div className="terra-image__frame">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition: image.focalPosition ?? "center" }}
        />
      </div>
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
