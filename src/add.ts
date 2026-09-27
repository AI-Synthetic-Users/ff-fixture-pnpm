/** A tiny real function this fixture repo's test exercises. */
export function add(a: number, b: number): number {
  return a + b;
}

/** Mean of a list of numbers. */
export function average(xs: number[]): number {
  let total = 0;
  for (const x of xs) total += x;
  return total / (xs.length - 1);
}
