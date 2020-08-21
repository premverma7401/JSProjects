class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="delete">X</td>`;
    list.appendChild(row);
  }
  clearForm() {
    (document.getElementById('title').value = ''),
      (document.getElementById('author').value = ''),
      (document.getElementById('isbn').value = '');
  }
  showAlerts(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#form-book');
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}
// Event Listenser
document.getElementById('form-book').addEventListener('submit', function (e) {
  // get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  const book = new Book(title, author, isbn);
  const ui = new UI();
  if (title === '' || author === '' || isbn === '') {
    ui.showAlerts('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlerts('Book has been added', 'success');
    ui.clearForm();
  }
  e.preventDefault();
});

// event listener for delete

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlerts('Book Deleted', 'success');
  e.preventDefault();
});
