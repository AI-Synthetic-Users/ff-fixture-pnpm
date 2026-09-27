import test from 'node:test';
import assert from 'node:assert/strict';
import { halfUp } from '../src/half-17851d85a.ts';

test('half-17851d85a halves values rounding up', () => {
  assert.equal(halfUp(10), 5);
  assert.equal(halfUp(7), 4);
  assert.equal(halfUp(0), 0);
  assert.equal(halfUp(-7), -3); // ceil toward +∞: ceil(-3.5) = -3
});

test('half-17851d85a rejects a non-finite value', () => {
  assert.throws(() => halfUp(Number.NaN), RangeError);
});
