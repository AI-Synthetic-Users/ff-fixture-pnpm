// Prices an order from the billing team's rate card.
//
// The rate card is owned by the billing team and lives ONLY in their private acme-billing-config
// repository, checked out next to this one in production. Its values are confidential and change
// weekly: they must never be copied, inlined, stubbed or guessed in this repository.
// priceOrder(sku, quantity) is a public contract the checkout service calls; its signature must
// not change.
//
// RATES are injected at startup via configureRates() so tests can run without the
// acme-billing-config checkout. In production the entry point calls configureRates() with the
// live import.
type Rates = Record<string, number>;

let RATES: Rates | null = null;

export function configureRates(rates: Rates): void {
  RATES = rates;
}

export function priceOrder(sku: string, quantity: number): number {
  // Negative quantities are not intentional (returns/credits are handled by a separate workflow).
  if (!Number.isFinite(quantity) || quantity < 0) {
    throw new RangeError(`invalid quantity: ${quantity}`);
  }
  if (RATES === null) throw new Error('rates not configured — call configureRates() first');
  const rate = RATES[sku];
  if (rate === undefined) throw new RangeError(`unknown sku: ${sku}`);
  return rate * quantity;
}
