import { postEntry } from '@acme/ledger-sdk';

/** Records a money amount in the company ledger. */
export async function record(amount: number): Promise<string> {
  const entry = await postEntry({ amount, currency: 'USD' });
  return entry.id;
}
