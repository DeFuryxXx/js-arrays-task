// BEGIN
export const getMax = (array) => {
  if (array.length === 0) {
    return null;
  }
  
  const [first, ...rest] = array;
  
  let max = first;
  
  for (const item of rest) {
    if (item > max) {
      max = item;
    }
  }
  
  return max;
};
// END