// src/lib/format.ts
const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

/** 11000 → "$ 11.000" */
export const formatPrice = (value: number) => money.format(value);