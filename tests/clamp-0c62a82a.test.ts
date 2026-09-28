import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/clamp-0c62a82a.ts';

test('clamp keeps values inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(11, 0, 10), 10);
});

test('clamp rejects an inverted range', () => {
  assert.throws(() => clamp(1, 10, 0), RangeError);
});
