/** Clamps `value` into the inclusive range [min, max]. Throws a RangeError when any argument
 * is NaN or when min > max; infinite values are ordinary numbers here. */
export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value) || Number.isNaN(min) || Number.isNaN(max)) throw new RangeError('clamp arguments must not be NaN');
  if (min > max) throw new RangeError('min must not exceed max');
  return Math.min(Math.max(value, min), max);
}
