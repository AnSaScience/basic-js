const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
s1Str=s1.split("");
s2Str=s2.split("");
let commonChars=0;
s1Str.forEach(e => {
  if(s2Str.includes(e)){
  commonChars+=1;
    delete s2Str[s2Str.indexOf(e)]
  }
   console.log(s2Str,e,commonChars)
})
return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
