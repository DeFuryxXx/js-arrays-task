// BEGIN
export const reverse = (array) => {
  let temp;
  
  for (let i = 0; i < array.length / 2; i++) {
    let lastIndex = array.length - 1 - i;
    
    temp = array[i];
    
    array[i] = array[lastIndex];
    
    array[lastIndex] = temp;
  }
};
// END