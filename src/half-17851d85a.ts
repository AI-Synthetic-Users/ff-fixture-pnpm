// Returns half of `value`, rounded up to the nearest integer using Math.ceil
// (toward +∞). For negative inputs, e.g. halfUp(-7) → ceil(-3.5) → -3.
export function halfUp(value: number): number {
  if (!Number.isFinite(value)) throw new RangeError('value must be finite');
  return Math.ceil(value / 2);
}
