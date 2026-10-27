// src/data/products.ts
// ⚠️ Estos productos son EJEMPLOS: reemplazalos por los reales.
//
// - `category` tiene que ser el `slug` de una categoría (ver categories.ts)
// - `slug` es el nombre de la foto, sin extensión:
//     src/assets/images/productos/<category>/<slug>.jpg
// - `price` va en pesos, como número, sin puntos ni signo (9500 → "$ 9.500")

export interface Product {
  slug: string;
  category: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  // ── Panuzzo ──
  { category: "panuzzo", slug: "panuzzo-1", name: "Panuzzo 1", description: "Descripción del producto.", price: 9000 },
  { category: "panuzzo", slug: "panuzzo-2", name: "Panuzzo 2", description: "Descripción del producto.", price: 10500 },
  { category: "panuzzo", slug: "panuzzo-3", name: "Panuzzo 3", description: "Descripción del producto.", price: 12000 },

  // ── Pizzas ──
  { category: "pizzas", slug: "pizza-1", name: "Pizza 1", description: "Descripción del producto.", price: 11000 },
  { category: "pizzas", slug: "pizza-2", name: "Pizza 2", description: "Descripción del producto.", price: 13000 },
  { category: "pizzas", slug: "pizza-3", name: "Pizza 3", description: "Descripción del producto.", price: 15000 },

  // ── Papas fritas ──
  { category: "papas-fritas", slug: "papas-1", name: "Papas 1", description: "Descripción del producto.", price: 6000 },
  { category: "papas-fritas", slug: "papas-2", name: "Papas 2", description: "Descripción del producto.", price: 8500 },

  // ── Milanesas ──
  { category: "milanesas", slug: "milanesa-1", name: "Milanesa 1", description: "Descripción del producto.", price: 10000 },
  { category: "milanesas", slug: "milanesa-2", name: "Milanesa 2", description: "Descripción del producto.", price: 12500 },

  // ── Pollo frito ──
  { category: "pollo-frito", slug: "pollo-1", name: "Pollo 1", description: "Descripción del producto.", price: 9500 },
  { category: "pollo-frito", slug: "pollo-2", name: "Pollo 2", description: "Descripción del producto.", price: 14000 },
  { category: "pollo-frito", slug: "pollo-3", name: "Pollo 3", description: "Descripción del producto.", price: 17000 },
];