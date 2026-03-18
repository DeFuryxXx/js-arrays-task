// BEGIN
export default function makeCensored(text, stopWords) {
  const words = text.split(' ');
  const result = [];
  
  for (const word of words) {
    const censoredWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(censoredWord);
  }
  
  return result.join(' ');
}
// END