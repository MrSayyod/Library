// const { read } = require("fs")

let book = {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}

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
  }, {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  }, {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  }, {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  }, {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  }, {
    title: "Inferno",
    author: "Dan Brown",
    pages: "200",
    status: true
  }
]
const body = document.querySelector('body')
// const table = document.querySelector('.books')

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

Book.prototype.toggleRead = 

function addBookToLibrary(title, author, pages, status) {
  // title = prompt("What is the title of the new book?")
  // author = prompt("Who is the author of the book?")
  // pages = prompt("How many pages do the new book have?")
  // status = confirm("Did you read the book until the last page?")
  myLibrary.push(new Book(title, author, pages, status));
  displayBooks();
  // books = document.querySelector('.books');

  // const row = document.createElement('tr')

  // const newTitle = document.createElement('td');
  // newTitle.textContent = title;
  // row.appendChild(newTitle);

  // const newAuthor = document.createElement('td');
  // newAuthor.textContent =  author;
  // row.appendChild(newAuthor);

  // const newPages = document.createElement('td');
  // newPages.textContent =  pages;
  // row.appendChild(newPages);

  // const newStatus = document.createElement('td');
  // newStatus.textContent =  status;
  // row.appendChild(newStatus);

  // books.appendChild(row);
}

// addBookToLibrary();

function displayBooks() {
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'));
  }

  const table = document.createElement('table');
  const ro = document.createElement('tr');
  const t = document.createElement('th');
  t.textContent = 'Title';
  ro.appendChild(t);
  const a = document.createElement('th');
  a.textContent = 'Author';
  ro.appendChild(a);
  const p = document.createElement('th');
  p.textContent = 'Pages';
  ro.appendChild(p);
  const r = document.createElement('th');
  r.textContent = 'Read Status';
  ro.appendChild(r);

  body.appendChild(table);

  for (let i = 0; i < myLibrary.length; i++) {
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

    const btn = document.createElement('td');
    const content = document.createElement('button');
    content.setAttribute('data-index', i);

    content.textContent = "Delete";
    btn.appendChild(content)

    const read = document.createElement('td')
    const readButton = document.createElement('button')

    content.onclick = (event) => {
      myLibrary.splice(event.target.dataset.index, 1);
      table.removeChild(row)
    };


    row.appendChild(btn)

    table.appendChild(row);
  }
}

displayBooks();


const newBook = document.querySelector('.btn');

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

  const submit = document.createElement('input')
  submit.setAttribute('type', 'button')
  submit.setAttribute('value', "Add to the Library")
  form.appendChild(submit)
  submit.onclick = () => {
    addBookToLibrary(titleForBook.value, authorForBook.value, pagesForBook.value, statusForBook.checked)
    body.removeChild(form)
  }
  body.appendChild(form)
}
