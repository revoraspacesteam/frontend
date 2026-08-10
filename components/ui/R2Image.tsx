"use client";

import { useState, type ImgHTMLAttributes, type ReactNode } from "react";
import { r2Asset } from "@/lib/assets";

type R2ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  name: string;
  fallback?: ReactNode;
  width?: number;
  height?: number;
};

export function R2Image({
  name,
  fallback = null,
  alt = "",
  className,
  width,
  height,
  ...props
}: R2ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={r2Asset(name)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
