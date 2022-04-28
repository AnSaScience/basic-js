const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(names) {
   if(Array.isArray(names)){
  let correctNamesArr=names.filter(x=>{
      return typeof x=="string";})
    let teamName=correctNamesArr.map(x=>x.trim()[0].toUpperCase()).sort((a,b)=>a>b?1:-1).join("");
     return teamName;
 }
 return false
}


module.exports = {
  createDreamTeam
};
