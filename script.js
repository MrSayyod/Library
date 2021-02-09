let book = {
  title: "Inferno",
  author: "Dan Brown",
  pages: "200",
  status: true
}

let myArray = []
function Book() {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

title = prompt("What is the title of the new book?")
author = prompt("Who is the author of the book?")
pages = prompt("How many pages do the new book have?")
status = confirm("Did you read the book until the last page?")

function addBookToLibrary() {
  myArray.push(new Book())
}