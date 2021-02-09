let book = {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}

let myLibrary = []
function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary() {
  title = prompt("What is the title of the new book?")
  author = prompt("Who is the author of the book?")
  pages = prompt("How many pages do the new book have?")
  status = confirm("Did you read the book until the last page?")
  myLibrary.push(new Book(title, author, pages, status));
}

// addBookToLibrary();

function displayBooks(){
  for(let i = 0; i < myLibrary.length; i++){
    myLibrary[i].title;
    myLibrary[i].author;
    myLibrary[i].pages;
    myLibrary[i].status;
  }
}