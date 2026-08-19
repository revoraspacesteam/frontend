/** Public CDN base for Revora media assets. */
export const R2_PUBLIC_URL = (
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ||
  process.env.R2_PUBLIC_URL ||
  ""
).replace(/\/$/, "");

/** Build an absolute R2 asset URL. Pass the file name after the base, e.g. `Revora Logo.png`. */
export function r2Asset(path: string): string {
  const clean = path.replace(/^\//, "");
  return `${R2_PUBLIC_URL}/${clean
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

export const assets = {
  logo: "logo.svg",
  workerTopdown: "worker-topdown.png",
  constructionCrane: "construction-crane.png",
  footerSkyline: "footer-skyline.png",
  notebookCover: "notebook-cover.png",
  book: "bookpng.png",
} as const;
