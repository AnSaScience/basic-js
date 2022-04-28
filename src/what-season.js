const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(date instanceof Date && !isNaN(date.valueOf()) && typeof(date.getMonth())!=="object" ){
 const monthNum=date.getMonth();
 switch(monthNum+1){
  case 1:
  return "winter";
  case 2:
  return "winter";
  case 3:
  return "spring";
  case 4:
  return "spring";
  case 5:
  return "spring";
  case 6:
  return "summer";
  case 7:
  return "summer";
  case 8:
  return "summer";
  case 9:
  return "fall";
  case 10:
  return "fall";
  case 11:
  return "fall";
  case 12:
  return "winter";
 }
}
 return "Invalid date!" 
}

module.exports = {
  getSeason
};
