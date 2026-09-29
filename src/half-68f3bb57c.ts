// Returns half of `value`, rounded up to the nearest integer.
export function halfUp(value: number): number {
  if (!Number.isFinite(value)) throw new RangeError('value must be finite');
  return Math.ceil(value / 2);
}
