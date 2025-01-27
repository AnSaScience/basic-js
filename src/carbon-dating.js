const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730; 
// t12

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(activity) {
   console.log(activity);
  // remove line with error and write your code here
  if( typeof activity=="string" && !isNaN(+activity) && isFinite(activity) && typeof +activity == "number" && +activity>0 && typeof(activity)!=="boolean" ){
    let k=0.693/HALF_LIFE_PERIOD;
     let result=Math.ceil(Math.log(MODERN_ACTIVITY/activity)/k);
     return result>0?result:false
  }
  return false
}

module.exports = {
  dateSample
};
