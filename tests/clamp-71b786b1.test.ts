import assert from 'node:assert/strict';
import { test } from 'node:test';
import { clamp } from '../src/clamp-71b786b1.ts';

test('clamp keeps values inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(11, 0, 10), 10);
});

test('clamp keeps the boundaries and a single-point range', () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
  assert.equal(clamp(7, 3, 3), 3);
  assert.equal(clamp(-5, -10, -1), -5);
  assert.equal(clamp(0.5, 0, 1), 0.5);
});

test('clamp treats infinities as numbers', () => {
  assert.equal(clamp(Infinity, 0, 10), 10);
  assert.equal(clamp(-Infinity, 0, 10), 0);
});

test('clamp rejects NaN and an inverted range', () => {
  assert.throws(() => clamp(Number.NaN, 0, 10), RangeError);
  assert.throws(() => clamp(5, Number.NaN, 10), RangeError);
  assert.throws(() => clamp(5, 0, Number.NaN), RangeError);
  assert.throws(() => clamp(1, 10, 0), RangeError);
});
