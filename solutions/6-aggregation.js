// BEGIN
export const calculateSum = (array) => {
  if (array.length === 0) {
    return 0;
  }
  
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      sum = sum + array[i];
    }
  }
  
  return sum;
};
// END