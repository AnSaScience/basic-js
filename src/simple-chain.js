const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length:0,
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   if(Number.isNaN(value)){
     value="NaN"
   }
   if(value===null){
     value="null";
   }
   if(value===true){
     value="true"
   }
   if(value===false){
     value="false"
   }
   if(value===0){
     value="0"
   }
   if(!value){
     value="";
   }
    this.chain.push(`( ${value} )`)
    this.length+=1;
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(Number.isInteger(position)){
      if(position>=1 && position<this.length){
    this.chain.splice(position-1,1);
    this.length-=1;
    return this;
  }}
  this.chain=[];
  this.length=0;
  throw new Error('You can\'t remove incorrect link!') 
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let chainCopy=this.chain;
    this.length=0;
    this.chain=[];
    return chainCopy.join("~~");
  }
};

module.exports = {
  chainMaker
};
