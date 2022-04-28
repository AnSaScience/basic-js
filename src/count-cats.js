const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(cats) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let foundCats= cats.map((x,i)=>{
    return x.filter(x=>x==="^^").length
  })
     console.log(foundCats);

  return foundCats.length>0?foundCats.reduce((sum,current)=>sum+=current):0
}

module.exports = {
  countCats
};
