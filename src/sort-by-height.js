const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let filteredAndSortedArr=arr.filter(x=>x!==-1).sort((a,b)=>a>b?1:-1);
  let sortedByHeight=[];
  arr.forEach(x=>{
    if(x===-1){
      sortedByHeight.push(x);
    }
    else{
      sortedByHeight.push(filteredAndSortedArr.shift())
    }
  })
  return sortedByHeight;
}

module.exports = {
  sortByHeight
};
