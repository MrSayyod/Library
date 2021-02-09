let book = {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}
const body = document.querySelector('body')
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
const newBook = document.querySelector('.btn')
newBook.onclick = () => {
  const form = document.createElement('form')
  const labelForTitle = document.createElement('label')
  labelForTitle.setAttribute('for', 'title')
  labelForTitle.textContent = 'Title'
  const titleForBook = document.createElement('input')
  titleForBook.setAttribute('type', 'text')
  titleForBook.setAttribute('id', 'title')
  labelForTitle.appendChild(titleForBook)
  form.appendChild(labelForTitle)

  const labelForAuthor = document.createElement('label')
  labelForAuthor.setAttribute('for', 'author')
  labelForAuthor.textContent = 'Author'
  const authorForBook = document.createElement('input')
  authorForBook.setAttribute('type', 'text')
  authorForBook.setAttribute('id', 'author')
  labelForAuthor.appendChild(authorForBook)
  form.appendChild(labelForAuthor)
  
  const labelForPages = document.createElement('label')
  labelForPages.setAttribute('for', 'pages')
  labelForPages.textContent = 'Number of pages'
  const pagesForBook = document.createElement('input')
  pagesForBook.setAttribute('type', 'text')
  pagesForBook.setAttribute('id', 'pages')
  labelForPages.appendChild(pagesForBook)
  form.appendChild(labelForPages)

  const labelForReadStatus = document.createElement('label')
  labelForReadStatus.setAttribute('for', 'status')
  labelForReadStatus.textContent = "Click if you have finished the book"
  const statusForBook = document.createElement('input')
  statusForBook.setAttribute('type', 'checkbox')
  statusForBook.setAttribute('id', 'status')
  labelForReadStatus.appendChild(statusForBook)
  form.appendChild(labelForReadStatus)
  
  body.appendChild(form)

}