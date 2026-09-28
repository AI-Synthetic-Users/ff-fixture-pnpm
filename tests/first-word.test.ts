import assert from 'node:assert/strict';
import { test } from 'node:test';
import { firstWord } from '../src/first-word.ts';

test('firstWord returns the first word uppercased', () => {
  assert.equal(firstWord('ada lovelace'), 'ADA');
});

test('firstWord returns an empty string when the name is missing', () => {
  assert.equal(firstWord(null), '');
});
