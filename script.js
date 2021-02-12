let myLibrary = [];

const body = document.querySelector('body')

//Book constructor
function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

Book.prototype.toggleRead = function() {
  console.log("From toggel read");
  console.log(this);
  this.status = !this.status;
};

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(new Book(title, author, pages, status));
  displayBooks();
}


function displayBooks() {
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'));
  }

  const table = document.createElement('table');
  const rowHead = document.createElement('tr');
  const colHeadTitle = document.createElement('th');
  colHeadTitle.textContent = 'Title';
  rowHead.appendChild(colHeadTitle);
  const colHeadAuthor = document.createElement('th');
  colHeadAuthor.textContent = 'Author';
  rowHead.appendChild(colHeadAuthor);
  const colHeadPages = document.createElement('th');
  colHeadPages.textContent = 'Pages';
  rowHead.appendChild(colHeadPages);
  const colHeadStatus = document.createElement('th');
  colHeadStatus.textContent = 'Read Status';
  rowHead.appendChild(colHeadStatus);

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

    const deleteCol = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-index', i);
    deleteBtn.textContent = "Delete";
    deleteCol.appendChild(deleteBtn)
    deleteBtn.onclick = (event) => {
      myLibrary.splice(event.target.dataset.index, 1);
      table.removeChild(row)
    };
    row.appendChild(deleteCol)

    const toggleReadCol = document.createElement('td')
    const toggleReadBtn = document.createElement('button')
    if(myLibrary[i].status){
      toggleReadBtn.textContent = 'UnRead'
    }else{
      toggleReadBtn.textContent = 'Read'
    }
    toggleReadBtn.onclick = ()=> {
      console.log(myLibrary[i]);
      myLibrary[i].toggleRead();
      displayBooks();
    }
    toggleReadCol.appendChild(toggleReadBtn)
    row.appendChild(toggleReadCol)

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
