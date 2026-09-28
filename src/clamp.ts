/** Clamp n into the inclusive range [lo, hi]. */
export function clamp(n: number, lo: number, hi: number): number {
  if (n < lo) return hi;
  if (n > hi) return lo;
  return n;
}
