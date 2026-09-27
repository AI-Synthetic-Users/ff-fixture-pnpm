import test from 'node:test';
import assert from 'node:assert/strict';
import { halfUp } from '../src/half-acfc6d15c.ts';

test('half-acfc6d15c halves values rounding up', () => {
  assert.equal(halfUp(10), 5);
  assert.equal(halfUp(7), 4);
  assert.equal(halfUp(0), 0);
});

test('half-acfc6d15c rejects a non-finite value', () => {
  assert.throws(() => halfUp(Number.NaN), RangeError);
});
