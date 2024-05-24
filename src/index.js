import analyzer from './analyzer.js';
const metricsFunctions = [
analyzer.getWordCount,
analyzer.getCharacterCount,
analyzer.getCharacterCountExcludingSpaces,
analyzer.getAverageWordLength,
analyzer.getNumberCount,
analyzer.getNumberSum
]
const metricUpdates = [
  document.querySelector("total-words"),
  document.querySelector(".totalchar"),
  document.querySelector ("chars-without-spaces"),
  document.querySelector("average-words"),
  document.querySelector("num"),
  document.querySelector("sum-nums"),
]
const resetButton = document.getElementById("reset-button")
const textArea = document.querySelector('textarea[name="user-input"]')
function clean (){
  textArea.value = ""
}
resetButton.addEventListener("click", clean);
function updateValue() {
  metricUpdates.forEach(element, index, array)
}
textArea.addEventListener("input", updateValue);
