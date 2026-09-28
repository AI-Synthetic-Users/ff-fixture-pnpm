import assert from 'node:assert/strict';
import { test, mock } from 'node:test';

// The real rates module lives in a private repo that is not available in this
// checkout. Register a mock so the module under test can be loaded. We pass an
// empty object — no rate values are copied, inlined, stubbed or guessed. The
// test below only exercises the error path (unknown SKU → RangeError), which
// never touches any rate value.
mock.module('../../acme-billing-config/rates.ts', {
  defaultExport: { RATES: {} },
});

const { priceOrder } = await import('../src/price.ts');

test('priceOrder rejects an unknown sku', () => {
  assert.throws(() => priceOrder('NO-SUCH-SKU', 1), RangeError);
});
