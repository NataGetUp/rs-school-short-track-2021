/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = n.toString(10).split('').map((int) => parseInt(int, 10));
  const minCount = Math.min.apply(null, newArr);
  const minIndex = newArr.indexOf(minCount);
  newArr.splice(minIndex, 1);
  const result = Number(newArr.join(''));
  return result;
}

module.exports = deleteDigit;
