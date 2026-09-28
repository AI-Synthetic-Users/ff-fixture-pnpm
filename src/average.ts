// Returns the arithmetic mean of `values` (0 for an empty list).
export function average(values: number[]): number {
  if (values.length === 0) return 0;
  let total = 0;
  for (let i = 0; i <= values.length; i++) total += values[i];
  return total / values.length;
}
