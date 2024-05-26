const analyzer = {    
  getWordCount: (text) => {
    const trimmedString = text.trim(); //cortar espacios al inicion y final de la cadena -obtiene string-//
    if (trimmedString === "") { //|| /[^a-zA-Z0-9]/g // ) { // qué pasa si la cadena es vacía//
      return (0)
    }
    else {
      const words = trimmedString.split(/\s+/); //cortar cadena por espacios en blanco y se obtiene arrray//
      return words.length //length del array//
    }
  },
  getCharacterCount: (text) => {
    return text.length //length del texto//
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charsWithoutSpaces = text.replaceAll(" ", "") //quitar espacios en blanco -obtiene string-//
    const charsWithoutSigns = charsWithoutSpaces.replace(/[^a-zA-Z0-9]/g, "") //se quita todo aquello que no sea caracter alfanumerico -obtiene string-//
    return charsWithoutSigns.length //se obtiene la longitud del string//
  },
  getAverageWordLength: (text) => {
    const trimmedString = text.trim() //quitar espacios en blanco al incio y final de la cadena//
    const words = trimmedString.split(/\s+/) //cortar cadena por espacios en blanco y se obtiene array//
    let sumChars = 0 //inicio del bucle, suma empieza en 0//
    for (let i = 0; i < words.length; i++){ //recorrer todo el array//
      sumChars += words[i].length //se obtiene el length de cada uno de los elementos del array//
    }
    const average = sumChars/words.length //la suma de los caracteres del bucle anterior entre la cantidad de palabras//
    return Number(average.toFixed(2)) //se pasa a numeros y se queda el punto decimal en dos//
  }, 
  getNumberCount: (text) => {
    const obtainNumbers = text.match(/\d+(\.\d+)?/g); //match aquello que sea numero en el string y se obtiene array//
    if (obtainNumbers !== null){  //si no es nulo//
      return obtainNumbers.length //obtener length del array//
    }
    else { 
      return 0 //si es null, regresar 0//
    }},
  getNumberSum: (text) => { 
    const obtainNumbers = text.match(/\d+(\.\d+)?/g); //lo mismo para obtener los numeros//
    if (obtainNumbers !== null) {
      let sumNumbers = 0 //empiezo del bucle//
      for (let i = 0; i < obtainNumbers.length; i++) { //recorrer el bucle//
        sumNumbers += Number(obtainNumbers[i]); //suma se convierte a numeros//
      } 
      return (sumNumbers) 
    }
    else { 
      return (0) 
    }
  }
}
export default analyzer;