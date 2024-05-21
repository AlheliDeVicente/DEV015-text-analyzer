import analyzer from './analyzer.js';
const resetButton = document.getElementById("reset-button")
const textArea = document.querySelector('textarea[name="user-input"]')
function clean (){
    textArea.value = ""
}
resetButton.addEventListener("click", clean)