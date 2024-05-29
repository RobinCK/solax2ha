export const read32BitSigned = (a: number, b: number) =>
  a < 32768
    ? b + 65536 * a
    : b + 65536 * a - 4294967296
;

export const read16BitSigned = (n: number) => n < 32768 ? n : n - 65536

export const read32BitUnsigned = (a: number, b: number) => b + 65536 * a;
