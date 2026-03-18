// BEGIN
export default function countUniqChars(text) {
  if (text.length === 0) {
    return 0;
  }
  
  const uniqueChars = [];
  
  for (const char of text) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }
  
  return uniqueChars.length;
}
// END