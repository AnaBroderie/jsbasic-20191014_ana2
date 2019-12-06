/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = 1;
  for (i = 0; i < n; i += 1) {
    result *= m;
  }
  return result;
}
