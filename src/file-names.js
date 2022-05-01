const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
   throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
//   let correctNames=[];
//   let iter;
//  for(let i=0;i<names.length;i++){
//   //  console.log(!correctNames.includes(names[i]));
//    if(!correctNames.includes(names[i])){
//      correctNames.push(names[i])
//      iter=1;
//    }
//    else{
//      let regexp=new RegExp(`${names[i]}`,'g')
//      names=names.join(" ").replace(regexp,`${names[i]}(${iter})`).split(" ");
//     correctNames.push(names[i])
//     iter+=1;
//    }
//    console.log(names);
//  }
//  console.log(correctNames);
}

module.exports = {
  renameFiles
};
