// Array for storing books
let myLibrary = [];

// Book object
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Function for displaying Book information
Book.prototype.info = function() {
    if (this.isRead == true) {
        return `${this.title} by ${this.author}, ${this.pages} pages, already read.`
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
    }
}

// Add a new book to the lirary
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const freakonomics = new Book("Freakonomics", "Steven Levitt", 200, true);

addBookToLibrary(theHobbit);
addBookToLibrary(freakonomics);

console.log(theHobbit.info());
console.log(freakonomics.info());
console.table(myLibrary);
