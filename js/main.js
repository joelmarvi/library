// Array for storing books
let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 295, false), new Book("Freakonomics", "Steven Levitt", 200, true)];
const books = myLibrary;
books.forEach((item) => render(item));

// Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Yes" : "No";
}


function render(book) {
   const bookList = document.querySelector("#book-list");
   const bookWrapper = document.createElement("tr");
   bookWrapper.innerHTML = `
   <td class="text-center">${book.title}</td>
   <td class="text-center">${book.author}</td>
   <td class="text-center">${book.pages}</td>
   <td class="text-center">${book.read}</td>
   <td class="text-center"><button class="btn btn-danger btn-sm rounded-circle">X</button></td>` 

   bookList.appendChild(bookWrapper);
}




