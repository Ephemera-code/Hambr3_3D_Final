// src/lib/photos.ts
// Busca las fotos por nombre de archivo, sin tener que importarlas a mano.
//
//   src/assets/images/categorias/<slug-categoria>.jpg
//   src/assets/images/productos/<slug-categoria>/<slug-producto>.jpg
import type { ImageMetadata } from "astro";

type Files = Record<string, { default: ImageMetadata }>;

const categoryFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/categorias/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Files;

const productFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/productos/*/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Files;

const fileName = (path: string) => path.split("/").pop()!.replace(/\.[^.]+$/, "");
const folderName = (path: string) => path.split("/").slice(-2, -1)[0];

const categoryPhotos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(categoryFiles).map(([path, mod]) => [fileName(path), mod.default])
);

const productPhotos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(productFiles).map(([path, mod]) => [
    `${folderName(path)}/${fileName(path)}`,
    mod.default,
  ])
);

export const categoryPhoto = (slug: string) => categoryPhotos[slug];
export const productPhoto = (category: string, slug: string) =>
  productPhotos[`${category}/${slug}`];