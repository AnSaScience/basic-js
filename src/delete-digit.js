const { NotImplementedError } = require('../extensions/index.js');

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
 function deleteDigit(num) {
  let variants=num.toString().split("").map((x,i,arr)=>{
    return +arr.join("").replace(`${x}`,"");
  })
  return Math.max(...variants)
}

module.exports = {
  deleteDigit
};
