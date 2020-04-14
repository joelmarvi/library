// Array for storing books
let myLibrary = [];

// Book object
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Add a new book to the lirary
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const freakonomics = new Book("Freakonomics", "Steven Levitt", 200, true);

addBookToLibrary(theHobbit);
addBookToLibrary(freakonomics);

let table = document.querySelector("table");
let data = Object.keys(myLibrary[0]);

generateTableHead(table, data);
generateTable(table, myLibrary);

