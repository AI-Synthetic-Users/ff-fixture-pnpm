import assert from 'node:assert/strict';
import { test } from 'node:test';
import { record } from '../src/ledger.ts';

test('record returns the ledger entry id', async () => {
  const id = await record(12);
  assert.equal(typeof id, 'string');
});
