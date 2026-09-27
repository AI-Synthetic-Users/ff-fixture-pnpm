export function priceOrder(rates: Record<string, number>, sku: string, quantity: number): number {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error(`quantity must be a positive integer, got ${quantity}`);
  }
  if (!(sku in rates)) {
    throw new Error(`Unknown SKU: ${sku}`);
  }
  const rate = rates[sku];
  return rate * quantity;
}
