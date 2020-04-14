// Array for storing books
let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 600, false), new Book("Freakonomics", "Steven Levitt", 336, true), new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 448, true)];
const books = myLibrary;
books.forEach((item) => render(item));

// Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Yes" : "No";
}

// Connect form to book list
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // Avoid the default behavior from the submit button so it works with our function
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("book-pages").value;
    const read = document.getElementById("book-read").checked;

    if (title === "" || author === "" || pages === "" || read === undefined) {
        alert("Please fill out the form completely");
    } else {
        const newBook = new Book(title, author, pages, read);
        render(newBook);
        clearForm();
    }
});

// Render the books in the DOM
function render(book) {
   const bookList = document.querySelector("#book-list");
   const bookWrapper = document.createElement("tr");
   bookWrapper.innerHTML = `
   <td class="text-center">${book.title}</td>
   <td class="text-center">${book.author}</td>
   <td class="text-center">${book.pages}</td>
   <td class="text-center">${book.read}</td>
   <td class="text-center"><button class="remove btn btn-danger btn-sm rounded-circle">X</button></td>` 

   bookList.appendChild(bookWrapper);
}

// Delete books from the DOM
document.querySelector("#book-list").addEventListener("click", (e) => {
    deleteBook(e.target);
});


function deleteBook(el) {
    if (el.classList.contains("remove")) {
        // duplicate parent element so the table row can be deleted
        el.parentElement.parentElement.remove();
    }
}
// Clear form after submitting
function clearForm() {
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-pages").value = "";
    document.getElementById("book-read").checked = undefined;
}


