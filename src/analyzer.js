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
    const trimmedString = text.trim() 
    const words = trimmedString.split(/\s+/) 
    let sumChars = 0 
    for (let i = 0; i < words.length; i++){ 
      sumChars += words[i].length 
    }
    const average = sumChars/words.length 
    return Number(average.toFixed(2))
  }, 
  getNumberCount: (text) => {
    const obtainNumbers = text.match(/\d+(\.\d+)?/g); 
    if (obtainNumbers !== null){ 
      return obtainNumbers.length 
    }
    else { 
      return (0) 
    }},
  getNumberSum: (text) => { 
    const obtainNumbers = text.match(/\d+(\.\d+)?/g);
    if (obtainNumbers !== null) { 
      let sumNumbers = 0 
      for (let i = 0; i < obtainNumbers.length; i++) {
        sumNumbers += Number(obtainNumbers[i]);
      } 
      return (sumNumbers) 
    }
    else { 
      return (0) 
    }
  }
}
export default analyzer;