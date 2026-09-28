/** Rounds a money amount to a whole unit using banker's rounding (half to even). */
export function roundMoney(x: number): number {
  const rounded = x >= 0 ? Math.floor(x) : Math.ceil(x);
  const frac = x - rounded;
  if (Math.abs(frac) !== 0.5) {
    return Math.round(x);
  }
  // Half exactly — round to nearest even integer
  if (rounded % 2 === 0) {
    return rounded;
  }
  return rounded + (x >= 0 ? 1 : -1);
}
