let book = {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}

const table = document.querySelector('.books')

let myLibrary = [
  {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  },
  {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
},{
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
},{
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
},{
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
},{
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
},{
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}
]
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
    const row = document.createElement('tr')

    const title = document.createElement('td');
    title.textContent = myLibrary[i].title;
    row.appendChild(title);

    const author = document.createElement('td');
    author.textContent = myLibrary[i].author;
    row.appendChild(author);

    const pages = document.createElement('td');
    pages.textContent = myLibrary[i].pages;
    row.appendChild(pages);

    const status = document.createElement('td');
    status.textContent = myLibrary[i].status;
    row.appendChild(status);

    table.appendChild(row);
  }
}