// src/data/Categories.ts
// El `slug` tiene que coincidir con el nombre de la foto en
// src/assets/images/categorias/  (por ejemplo: panuzzo.jpg, papas-fritas.webp)

export interface Category {
  slug: string;
  name: string;
  /** Opcional: por defecto la tarjeta lleva a /menu/<slug> */
  href?: string;
}

export const categories: Category[] = [
  { slug: "panuzzo", name: "Panuzzo" },
  { slug: "pizzas", name: "Pizzas" },
  { slug: "papas-fritas", name: "Papas fritas" },
  { slug: "milanesas", name: "Milanesas" },
  { slug: "pollo-frito", name: "Pollo frito" },
];