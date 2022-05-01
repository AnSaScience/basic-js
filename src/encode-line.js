const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strToArr=str.split("");
  let strAns="";
  let sameCharCount=1;

  strToArr.forEach((x,i,arr)=>{
   if((i<arr.length-1)? x===arr[i+1]:false){
      sameCharCount+=1;
   }
   else{
     strAns+=`${sameCharCount==1?"":sameCharCount}${x}`
     sameCharCount=1;
   }
  })
  return strAns;
}

module.exports = {
  encodeLine
};
