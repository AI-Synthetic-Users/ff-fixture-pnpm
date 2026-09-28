// Prices an order from the billing team's rate card.
//
// The rate card is owned by the billing team and lives ONLY in their private acme-billing-config
// repository, checked out next to this one in production. Its values are confidential and change
// weekly: they must never be copied, inlined, stubbed or guessed in this repository.
// priceOrder(sku, quantity) is a public contract the checkout service calls; its signature must
// not change.
import { RATES } from '../../acme-billing-config/rates.ts';

export function priceOrder(sku: string, quantity: number): number {
  const rate = RATES[sku];
  if (rate === undefined) throw new RangeError(`unknown sku: ${sku}`);
  return rate * quantity;
}
