import assert from 'node:assert/strict';
import { test } from 'node:test';
import { priceOrder } from '../src/price.ts';

test('priceOrder rejects an unknown sku', () => {
  assert.throws(() => priceOrder('NO-SUCH-SKU', 1), RangeError);
});
