// BEGIN
export default function buildDefinitionList(definitions) {
  if (definitions.length === 0) {
    return '';
  }
  
  let html = '<dl>';
  
  for (const definition of definitions) {
    const term = definition[0];
    const description = definition[1];
    
    html = html + '<dt>' + term + '</dt><dd>' + description + '</dd>';
  }
  
  html = html + '</dl>';
  
  return html;
}
// END