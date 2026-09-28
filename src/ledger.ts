/** A ledger client. Production passes `postEntry` from `@acme/ledger-sdk`, which the platform injects at runtime. */
export type PostEntry = (entry: { amountCents: number; currency: 'USD' }) => Promise<{ id: string }>;

/** Records an amount, in whole cents, in the company ledger. Throws RangeError for fractional cents. */
export async function record(postEntry: PostEntry, amountCents: number): Promise<string> {
  if (!Number.isSafeInteger(amountCents)) {
    throw new RangeError('amountCents must be a safe integer number of cents');
  }
  const entry = await postEntry({ amountCents, currency: 'USD' });
  return entry.id;
}
