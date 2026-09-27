import assert from 'node:assert/strict';
import { test, mock } from 'node:test';

// Mock the RATES module before importing priceOrder
const mockRates = {
  'widget': 10,
  'gadget': 25.5,
  'premium': 100,
};

mock.module('../../acme-billing-config/rates.ts', {
  namedExports: {
    RATES: mockRates,
  },
});

const { priceOrder } = await import('../src/price.ts');

test('priceOrder returns correct price for a known SKU', () => {
  assert.equal(priceOrder('widget', 3), 30);
  assert.equal(priceOrder('gadget', 2), 51);
  assert.equal(priceOrder('premium', 1), 100);
});

test('priceOrder throws for an unknown SKU', () => {
  assert.throws(() => priceOrder('unknown-sku', 1), {
    message: 'Unknown SKU: unknown-sku',
  });
  assert.throws(() => priceOrder('nonexistent', 5), {
    message: 'Unknown SKU: nonexistent',
  });
});

test('priceOrder throws when quantity is not a positive integer', () => {
  assert.throws(() => priceOrder('widget', 0), {
    message: 'quantity must be a positive integer, got 0',
  });
  assert.throws(() => priceOrder('widget', -1), {
    message: 'quantity must be a positive integer, got -1',
  });
  assert.throws(() => priceOrder('widget', 2.5), {
    message: 'quantity must be a positive integer, got 2.5',
  });
});