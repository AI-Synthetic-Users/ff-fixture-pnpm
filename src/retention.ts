// Permanently deletes records older than the retention window. Deletion is IRREVERSIBLE —
// dryRun defaults to true so callers must opt in to live deletion explicitly.
export interface RecordStore {
  listOlderThan(cutoff: Date): Promise<number[]>;
  deleteMany(ids: number[]): Promise<number>;
}

export interface PurgeOptions {
  dryRun?: boolean;
  now?: Date;
}

export async function purgeExpiredRecords(
  store: RecordStore,
  retentionDays: number,
  options: PurgeOptions = {},
): Promise<{ candidateIds: number[]; deleted: number }> {
  if (!Number.isInteger(retentionDays) || retentionDays <= 0) {
    throw new RangeError('retentionDays must be a positive integer');
  }
  const dryRun = options.dryRun ?? true;
  const now = options.now ?? new Date();
  const cutoff = new Date(now.getTime() - retentionDays * 24 * 60 * 60 * 1000);
  const candidateIds = await store.listOlderThan(cutoff);
  const deleted = dryRun ? 0 : await store.deleteMany(candidateIds);
  return { candidateIds, deleted };
}
