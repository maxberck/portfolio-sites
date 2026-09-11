import Image from "next/image";

import type { FormImageData } from "../types";

type FormImageProps = {
  image: FormImageData;
  className?: string;
  sizes: string;
  priority?: boolean;
};

export function FormImage({ image, className = "", sizes, priority = false }: FormImageProps) {
  return (
    <figure className={`form-image ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
      />
      {image.ref ? <figcaption>{image.ref}</figcaption> : null}
    </figure>
  );
}
