const inputText = window.prompt("Enter a string to edit");
const replaceOccurenceOf = window.prompt("Replace all occurences of");
const replaceOccurenceWith = window.prompt(`Replace all occurences of " ${replaceOccurenceOf} " with`);

document.getElementById('entered-string').innerText = "Input Text = " + inputText;
document.getElementById('modified-string').innerText = "Modified Text = " + inputText.replaceAll(replaceOccurenceOf, replaceOccurenceWith);