// src/lib/cart.ts
// Carrito del lado del navegador. Se guarda en localStorage, así sigue ahí
// cuando la persona cambia de página o vuelve más tarde.
// Solo se importa desde scripts del cliente (no desde el frontmatter de Astro).

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

const KEY = "hambre-cart-v1";
const MAX_QTY = 99;
export const CART_EVENT = "cart:change";

const isItem = (x: any): x is CartItem =>
  x &&
  typeof x.id === "string" &&
  typeof x.name === "string" &&
  Number.isFinite(x.price) &&
  Number.isInteger(x.qty) &&
  x.qty > 0;

function load(): CartItem[] {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(data) ? data.filter(isItem) : [];
  } catch {
    return []; // sin localStorage (modo privado, etc.): el carrito funciona igual, solo en memoria
  }
}

let items: CartItem[] = load();

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* ignorar */
  }
  window.dispatchEvent(new Event(CART_EVENT));
}

// Si el carrito cambia en otra pestaña, nos actualizamos
window.addEventListener("storage", (e) => {
  if (e.key === KEY) {
    items = load();
    window.dispatchEvent(new Event(CART_EVENT));
  }
});

export const getItems = () => items;
export const count = () => items.reduce((n, i) => n + i.qty, 0);
export const total = () => items.reduce((sum, i) => sum + i.price * i.qty, 0);

export function addItem(product: Omit<CartItem, "qty">) {
  const found = items.find((i) => i.id === product.id);
  if (found) found.qty = Math.min(found.qty + 1, MAX_QTY);
  else items = [...items, { ...product, qty: 1 }];
  save();
}

export function setQty(id: string, qty: number) {
  if (qty <= 0) return removeItem(id);
  const found = items.find((i) => i.id === id);
  if (!found) return;
  found.qty = Math.min(qty, MAX_QTY);
  save();
}

export function removeItem(id: string) {
  items = items.filter((i) => i.id !== id);
  save();
}

export function clear() {
  items = [];
  save();
}