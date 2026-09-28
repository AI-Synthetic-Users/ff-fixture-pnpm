import assert from 'node:assert';
import { test } from 'node:test';
import { average } from '../src/average.ts';

test('average of [2, 4, 6] is 4', () => {
  assert.strictEqual(average([2, 4, 6]), 4);
});

test('average of a single value is that value', () => {
  assert.strictEqual(average([7]), 7);
});

test('average of an empty list is 0', () => {
  assert.strictEqual(average([]), 0);
});
