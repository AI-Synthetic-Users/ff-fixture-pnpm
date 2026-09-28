// Rates are owned by the billing team and live in their private acme-billing-config repo.
// They must never be copied into this repository. Instead, pass them in as a Rates map
// via configurePricing() before calling priceOrder(), or pass them directly.
export type Rates = Record<string, number>;

let configuredRates: Rates | null = null;

/** Set the rates to use for all subsequent priceOrder calls. */
export function configurePricing(rates: Rates): void {
  configuredRates = rates;
}

export function priceOrder(sku: string, quantity: number, rates?: Rates): number {
  const effectiveRates = rates ?? configuredRates;
  if (!effectiveRates) {
    throw new Error(
      'Rates not configured. Call configurePricing(rates) or pass rates as the third argument.',
    );
  }
  const unitPrice = effectiveRates[sku];
  if (unitPrice === undefined) {
    throw new Error(`Unknown SKU: "${sku}"`);
  }
  return unitPrice * quantity;
}