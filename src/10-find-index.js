/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startCount = 0;
  let lastCount = array.length - 1;
  let result = 0;

  while (startCount <= lastCount) {
    const middleCount = startCount + lastCount;
    const tryCount = array[middleCount];
    if (tryCount === value) {
      result = middleCount;
    }
    if (tryCount > value) {
      lastCount = middleCount - 1;
    } else {
      startCount = middleCount + 1;
    }
  }

  return result;
}

module.exports = findIndex;
