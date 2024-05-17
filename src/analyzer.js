const analyzer = {  
  getWordCount: (text) => {
    text = text.trim
    const words = text
    return words.split(/\s+/)
  },
  getCharacterCount: (text) => {
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    let totalCharactersWithoutSpace = text.replaceAll(" ", "")
    const totalCharacters = totalCharactersWithoutSpace
    return totalCharacters.length
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

const text = " hello   beautiful    world  ";
console.log(analyzer.getWordCount(text)); 
