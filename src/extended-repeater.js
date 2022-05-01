const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(str==null){
    str="null"
  }
  else{
    str=str.toString()
  }
  if(typeof(options.addition)!=="undefined" && options.addition!==null){
    options.addition=options.addition.toString();
  }
  ///////////////////////////////////////////////
  if(!options.repeatTimes){
    options.repeatTimes=1;
  }
  if(!options.separator){
    options.separator="+"
  }
  if(!options.additionSeparator){
    options.additionSeparator="|";
  }
  if(options.addition===null){
    options.addition=="null"
  }
  else if(!options.addition){
    options.addition="";
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes=1
  }
  console.log(options.repeatTimes,options.separator,options.additionSeparator,options.addition,options.additionRepeatTimes)
  //////////////////////////////////////////////
  const strConstruct=(separator,content,repeatTimes)=>{
    let str="";
    while(repeatTimes>0){
      str+=content;
      if(repeatTimes>1){
       str+=separator;
      }
      repeatTimes--;
    }
   return str;
  }
  let constructedStr=str+strConstruct(options.additionSeparator,options.addition,options.additionRepeatTimes)
  let repeatedStr=strConstruct(options.separator,constructedStr,options.repeatTimes)
  return repeatedStr;
}


module.exports = {
  repeater
};
