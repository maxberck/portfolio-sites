import Image from "next/image";

import type { LuckyImageAsset } from "../types";

type LuckyImageProps = {
  asset: LuckyImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LuckyImage({ asset, className, priority = false, sizes = "(max-width: 760px) 100vw, 50vw" }: LuckyImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
