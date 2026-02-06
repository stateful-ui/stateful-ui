import type { ImageLoaderProps } from "next/image";

const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = [`width=${width}`, `format=auto`];
  if (quality) {
    params.push(`quality=${quality}`);
  }

  // In development, skip transformation (no CF edge available)
  if (process.env.NODE_ENV === "development") {
    return `${src}?${params.join("&")}`;
  }

  return `/cdn-cgi/image/${params.join(",")}/${normalizeSrc(src)}`;
}
