import test from 'node:test';
import assert from 'node:assert/strict';
import { halfUp } from '../src/half-d51dd473c.ts';

test('half-d51dd473c halves values rounding up', () => {
  assert.equal(halfUp(10), 5);
  assert.equal(halfUp(7), 4);
  assert.equal(halfUp(0), 0);
});

test('half-d51dd473c rejects a non-finite value', () => {
  assert.throws(() => halfUp(Number.NaN), RangeError);
});
