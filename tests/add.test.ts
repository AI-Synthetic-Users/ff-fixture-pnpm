import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add, average } from '../src/add.ts';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('average of multiple numbers', () => {
  assert.equal(average([1, 2, 3, 4, 5]), 3);
});

test('average of two numbers', () => {
  assert.equal(average([1, 3]), 2);
});

test('average of single-element array is the element itself', () => {
  assert.equal(average([5]), 5);
});

test('average of empty array is NaN', () => {
  assert.ok(Number.isNaN(average([])));
});
