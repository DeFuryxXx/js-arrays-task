// BEGIN
export const swap = (array) => {
  if (array.length < 2) {
    return array;
  }
  
  const firstElement = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstElement;
  
  return array;
};
// END