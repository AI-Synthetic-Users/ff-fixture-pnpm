import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/greet-17851d85.ts';

test('greet-17851d85 greets the seeded name', () => {
  assert.equal(greet(), 'hello world');
});
