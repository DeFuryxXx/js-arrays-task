const _ = require("lodash"); 

// BEGIN
export default function getSameCount(array1, array2) {
  const unique1 = _.uniq(array1);
  const unique2 = _.uniq(array2);
  
  let count = 0;
  
  for (let i = 0; i < unique1.length; i++) {
    for (let j = 0; j < unique2.length; j++) {
      if (unique1[i] === unique2[j]) {
        count++;
        break;
      }
    }
  }
  
  return count;
}
// END