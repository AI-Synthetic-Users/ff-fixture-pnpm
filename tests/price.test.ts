import assert from 'node:assert/strict';
import { test } from 'node:test';
import { configureRates, priceOrder } from '../src/price.ts';

test('priceOrder rejects an unknown sku', () => {
  configureRates({});
  assert.throws(() => priceOrder('NO-SUCH-SKU', 1), RangeError);
});
