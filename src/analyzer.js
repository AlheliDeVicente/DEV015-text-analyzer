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
      let sumWords = 0
      for (let i = 0; i < words.length; i++){
       sumWords += words[i].length
      }
    const average = sumWords/words.length
    return average
    }, 
  getNumberCount: (text) => {
    const convertToString = text.toString()
    const obtainNumbers = convertToString.match(/\d+/g)
      if (obtainNumbers){
      return obtainNumbers.length
    }
    else {
      return (0)
    }},

  getNumberSum: (text) => {
    const convertToString = text.toString()
    const obtainNumbers = convertToString.match (/\d+/g)
    if (obtainNumbers) {
      let sumNumbers = 0
      for (let i = 0; i < obtainNumbers.length; i++)
        sumNumbers += obtainNumbers[i]
      return (sumNumbers)
    }
    else {
      return (0)
    }
  }
}
export default analyzer;

const text = "Baby I'm so lonely 13 14 17!!!!!"
console.log(analyzer.getNumberSum(text)); 