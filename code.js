// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
// console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let content = `<p>`


let isEnding = function (currentPage)  {
    return endingPages.includes(currentPage)
}

while (currentPage !== null) {
currentPage = prompt(pages[0])

currentPage = Number(currentPage)

if (currentPage === 1) {
    content += `${pages[1]}`
    currentPage = Number(prompt(`${pages[1]}\n What page would you like to go to?`))
}

if (currentPage === 3) {
    currentPage = Number(prompt(`${pages[3]}`));
    content += `<p>${pages[3]}`
}

if (currentPage === 2)  {
    currentPage = Number(prompt(`${pages[2]}\n What page would you like to go to?`));
    content += `<p>${pages[2]}`
}   

if  (currentPage === 5) {
    currentPage = Number(prompt(`${pages[5]}\n What page would you like to go to?`));
    content += `<p>${pages[5]}`
}
if  (currentPage === 6) {
    currentPage = Number(prompt(`${pages[6]}`));
    content += `<p>${pages[6]}`
}
if  (currentPage === 7) {
    currentPage = Number(prompt(`${pages[7]}\n What page would you like to go to?`));
    content += `<p>${pages[7]}`
}
if  (currentPage === 8) {
    currentPage = Number(prompt(`${pages[8]}\n What page would you like to go to?`));
    content += `<p>${pages[8]}`
}
if  (currentPage === 10) {
    currentPage = Number(prompt(`${pages[10]}`));
    content += `<p>${pages[10]}`
} 
if  (currentPage === 11) {
    currentPage = Number(prompt(`${pages[11]}`));
    content += `<p>${pages[11]}`
} 
if  (currentPage === 12) {
    currentPage = Number(prompt(`${pages[12]}\n What page would you like to go to?`));
    content += `<p>${pages[12]}`
} 
if  (currentPage === 14) {
    currentPage = Number(prompt(`${pages[14]}\n What page would you like to go to?`));
    content += `<p>${pages[14]}`
} 
if  (currentPage === 15) {
    currentPage = Number(prompt(`${pages[15]}`));
    content += `<p>${pages[15]}`
} 
if  (currentPage === 16) {
    currentPage = Number(prompt(`${pages[16]}\n What page would you like to go to?`));
    content += `<p>${pages[16]}`
} 
if  (currentPage === 18) {
    currentPage = Number(prompt(`${pages[18]}`));
    content += `<p>${pages[18]}`
} 
if (isEnding(currentPage))  {
    content += `<p>${pages[currentPage]}`
    currentPage = null
}   
else {
    currentPage = null
}
if (currentPage === null) {
    content += `</p>
    <h2>The End!</h2>`
}
}


document.write(content)















      
// Your Code Here.
