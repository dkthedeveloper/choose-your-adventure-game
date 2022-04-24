// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
// console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let skipToPages = [3, 6, 10, 11, 15, 18];
let currentPage = 0;
let content = `<p>${pages[0].slice(0, -22)}</p>`


let isEnding = function ()  {
    return endingPages.includes(currentPage)
}
let isSkipToPage = function ()  {
    return skipToPages.includes(currentPage)
}

currentPage = Number(prompt(`${pages[currentPage]}`))
while (currentPage !== null) {

if (!isEnding(currentPage)) {
 content += `<p>You turned to page ${currentPage}.</p><p>${pages[currentPage]}`;
    if (!isSkipToPage(currentPage)) {
        currentPage = Number(prompt(`${pages[currentPage]}\n Which page would you like to turn to?`))
    }   else {
        currentPage = Number(prompt(`${pages[currentPage]}`))
    }
} else {
    content += `<p>You turned to page ${currentPage}.</p><p>${pages[currentPage]}</p><h2>The End!</h2>`;
    currentPage = null
} 
}

document.write(content)
