import analyzer from './analyzer.js';
const wordCount = document.querySelector('[data-testid="word-count"]') //obtener los <li> del html//
const totalChar = document.querySelector('[data-testid="character-count"]')
const totalCharNoSpaces = document.querySelector('[data-testid="character-no-spaces-count"]')
const average = document.querySelector('[data-testid="word-length-average"]')
const num = document.querySelector('[data-testid="number-count"]')
const sumNum = document.querySelector('[data-testid ="number-sum"')
const textArea = document.querySelector('textarea[name="user-input"]') //obtener la caja de texto//
const button = document.getElementById("reset-button") //obtener el botón//
textArea.addEventListener("input", results) //evento para actualizar resultados mientras la usuaria escribe//
function results (){
  wordCount.innerHTML = "Total de Palabras: " + analyzer.getWordCount(textArea.value) //obtener los valores de las funciones de text analyzer//
  totalChar.textContent = "Total de Caracteres: " + analyzer.getCharacterCount(textArea.value)
  totalCharNoSpaces.textContent = "Carácteres sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(textArea.value) //PROBLEMA: SE ME REEMPLAZA TODO EL TEXTO DIOSITO AYUDA//
  average.textContent = "Promedio por Palabras: " + analyzer.getAverageWordLength(textArea.value) //lo solucioné así, pero no sé si haya una mejor idea:(//
  num.textContent = "Números: " + analyzer.getNumberCount(textArea.value)
  sumNum.textContent = "Suma de Números: " + analyzer.getNumberSum(textArea.value)
}
button.addEventListener("click", clean) //evento para limpiar la caja de texto//
function clean (){
  textArea.value = "" //limpiar el contenido de la caja//
  results() // se llama nuevamente la función para ajustar los valores de las funciones//
}