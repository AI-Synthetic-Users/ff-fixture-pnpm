/** Returns the first word of a display name, uppercased. The name may be missing. */
export function firstWord(name: string | null): string {
  return name?.split(' ')[0]?.toUpperCase() ?? '';
}
