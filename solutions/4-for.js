// BEGIN
export default function addPrefix(array, prefix) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    result.push(prefix + ' ' + array[i]);
  }
  
  return result;
}
// END