const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 if(Array.isArray(arr)){
   let workingArr=arr.map(x=>x);
   let discardNext="--discard-next";
   let doubleNext="--double-next";
   let discardPrev="--discard-prev";
   let doublePrev="--double-prev";
   let isdiscardNext=workingArr.includes(discardNext);
   let isdiscarPrew=workingArr.includes(discardPrev);
   let isdoubleNext=workingArr.includes(doubleNext);
   let isdoublePrev=workingArr.includes(doublePrev);
   let maxLength=arr.length-1;
   for(let i=0;i<arr.length;i++){
     if(workingArr[i]===discardNext){
      workingArr[i]="delete";
      if(i<maxLength){
      workingArr[i+1]="delete";
    }
     }
     if(workingArr[i]===discardPrev){
      delete workingArr[i];
      if(i>0){
       workingArr[i-1]="delete";
    }
    }
    if(workingArr[i]===doubleNext){
      if(i<maxLength){
      workingArr[i]= workingArr[i+1]
      }
      else {
        workingArr[i]="delete";
      }
    }
    if(workingArr[i]===doublePrev){
      if(i>0){
      workingArr[i]= workingArr[i-1]
    }
    else
    { workingArr[i]="delete";
    }
    }
    console.log(workingArr)
   }
   workingArr= workingArr.filter(x=>x!=="delete") ;
  return workingArr;
  
 }
 return "'arr' parameter must be an instance of the Array!"
}

module.exports = {
  transform
};
