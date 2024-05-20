const analyzer = {  
  getWordCount: (text) => {
    const trimmedString = text.trim();
    const words = trimmedString.split(/\s+/);
    return words.length 
  },
  getCharacterCount: (text) => {
    return text.length 
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charsWithoutSpaces = text.replaceAll(" ", "")
    const charsWithoutSigns = charsWithoutSpaces.replace(/[^a-zA-Z0-9]/g, "")
    return charsWithoutSigns.length
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    
    const countNumbers = text 
      return countNumbers.toString().match(/\d+/g).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

const text = "Baby I'm so lonely!!!!!"
console.log(analyzer.getCharacterCountExcludingSpaces(text)); 
