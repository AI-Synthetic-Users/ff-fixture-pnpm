import assert from 'node:assert/strict';
import { test } from 'node:test';
import { average } from '../src/average.ts';

test('average of [2, 4, 6] is 4', () => {
  assert.equal(average([2, 4, 6]), 4);
});

test('average of a single value is that value', () => {
  assert.equal(average([7]), 7);
});

test('average of an empty list is 0', () => {
  assert.equal(average([]), 0);
});
