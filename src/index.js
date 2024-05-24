import analyzer from './analyzer.js';
const wordCount = document.querySelector('[data-testid="word-count"]')
const totalChar = document.querySelector('[data-testid="character-count"]')
const totalCharNoSpaces = document.querySelector('[data-testid="character-no-spaces-count"]')
const average = document.querySelector('[data-testid="word-length-average"]')
const num = document.querySelector('[data-testid="number-count"]')
const sumNum = document.querySelector('[data-testid ="number-sum"')
const textArea = document.querySelector('textarea[name="user-input"]')
const button = document.getElementById("reset-button")
textArea.addEventListener("input", results)
function results (){
  wordCount.textContent = analyzer.getWordCount(textArea.value)
  totalChar.textContent = analyzer.getCharacterCount(textArea.value)
  totalCharNoSpaces.textContent = analyzer.getCharacterCountExcludingSpaces(textArea.value)
  average.textContent = analyzer.getAverageWordLength(textArea.value)
  num.textContent = analyzer.getNumberCount(textArea.value)
  sumNum.textContent = analyzer.getNumberSum(textArea.value)
}
button.addEventListener("click", clean)
function clean (){
  textArea.value = ""
  results()
}