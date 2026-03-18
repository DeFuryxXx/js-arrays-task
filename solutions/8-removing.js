// BEGIN
export default function getSameParity(array) {
    if (array.length === 0) {
    return [];
  }
  
  const firstElementParity = Math.abs(array[0]) % 2;
  
  const result = [];
  
  for (const item of array) {
    if (Math.abs(item) % 2 === firstElementParity) {
      result.push(item);
    }
  }
  
  return result;
}
// END