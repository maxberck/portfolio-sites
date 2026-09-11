import Image from "next/image";

import type { ChromaticImageData } from "../types";

type ChromaticImageProps = {
  image: ChromaticImageData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showRef?: boolean;
};

export function ChromaticImage({ image, className = "", sizes = "(max-width: 800px) 100vw, 50vw", priority = false, showRef = true }: ChromaticImageProps) {
  return (
    <figure className={`chrom-image ${className}`.trim()}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} />
      {showRef ? <figcaption>{image.ref}</figcaption> : null}
    </figure>
  );
}
