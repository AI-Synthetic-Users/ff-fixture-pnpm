// Rates are owned by the billing team and live in their private acme-billing-config repo,
// checked out next to this one. They must never be copied into this repository.
import { RATES } from '../../acme-billing-config/rates.ts';

export function priceOrder(sku: string, quantity: number): number {
  return RATES[sku] * quantity;
}
