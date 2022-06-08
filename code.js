let endingPages = [4, 9, 13, 17, 19, 20];
let skipToPages = [3, 6, 10, 11, 15, 18];
let currentPage = 0
let content = `<p>${pages[0].slice(0, -22)}</p>`

function convertType (promptValue){
    if (promptValue === undefined || promptValue === NaN || promptValue === '') {
        promptValue = convertType(prompt(`Please enter a PAGE NUMBER\n
        ${pages[currentPage]}`))
    }
    if (promptValue === null) {
        return value
    } else return Number(promptValue)
}
let isEnding = function ()  {
    return endingPages.includes(currentPage)
}
let isSkipToPage = function ()  {
    return skipToPages.includes(currentPage)
}
let finish = function () {
    document.write(content)
}
let gameInstructions = 'Welcome to "Choose Your Adventure"!\n To play this game, you must respond to\n prompts by entering the number of the page you\nwish to turn to. Have fun!';

alert(gameInstructions);
currentPage = convertType(prompt(`${pages[currentPage]}`))
while (currentPage !== null) {


  if (!isEnding(currentPage)) {
  content += `<p>You turned to page ${currentPage}.</p><p>${pages[currentPage]}`;
    if (!isSkipToPage(currentPage)) {
        currentPage = convertType(prompt(`${pages[currentPage]}\n Which page would you like to turn to?`))
    }   else {
        currentPage = convertType(prompt(`${pages[currentPage]}`))
    }
} else {
    content += `<p>You turned to page ${currentPage}.</p><p>${pages[currentPage]}</p><h2>The End!</h2>`;
    content += `<div>
                <button onClick="window.location.href=window.location.href">Try Again?</button>
                </div>`
    currentPage = null
}
} 

finish()





