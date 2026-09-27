/** A tiny real function this fixture repo's test exercises. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Mean of a list of numbers. Returns NaN for an empty list. */
export function average(xs: number[]): number {
  if (xs.length === 0) return NaN;
  let total = 0;
  for (const x of xs) total += x;
  return total / xs.length;
}
