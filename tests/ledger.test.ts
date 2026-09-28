import assert from 'node:assert/strict';
import { test } from 'node:test';
import { record } from '../src/ledger.ts';

test('record passes whole cents to the ledger and returns the entry id', async () => {
  const seen: unknown[] = [];
  const id = await record(async (e) => { seen.push(e); return { id: 'entry-1' }; }, 1200);
  assert.equal(id, 'entry-1');
  assert.deepEqual(seen, [{ amountCents: 1200, currency: 'USD' }]);
});

test('record rejects fractional cents', async () => {
  await assert.rejects(record(async () => ({ id: 'x' }), 12.5), RangeError);
});
