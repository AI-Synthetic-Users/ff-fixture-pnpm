/** Returns -1, 0 or 1 for the sign of n. */
export function sign(n: number): number {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}
