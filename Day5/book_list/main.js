
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UserInterface{
    constructor(){
        this.titleInput = document.getElementById('title-input');
        this.authorInput = document.getElementById('author-input');
        this.isbnInput = document.getElementById('isbn-input');
        this.btn = document.getElementById('button-input');
        this.tableBody = document.getElementById('table-body');
        this.books = [];
    }

    bindEventListener(){
        this.btn.addEventListener('click', (e) => {
            this.handleButtonClick(e);
        });
    }

    handleButtonClick(event){
        const book = new Book(
            this.titleInput.value,
            this.authorInput.value,
            this.isbnInput.value,
        );

        this.books.push(book);
        this.populateBookTable();

        this.titleInput.value = '';
        this.authorInput.value = '';
        this.isbnInput.value = '';

    }

    populateBookTable(){
        this.tableBody.innerHTML = '';
        for(let book of this.books){
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            const authorCell = document.createElement('td');
            const isbnCell = document.createElement('td');
            const actionsCell = document.createElement('td');
            row.append(titleCell);
            row.append(authorCell);
            row.append(isbnCell);
            row.append(actionsCell);


            titleCell.innerHTML = book.title;
            authorCell.innerHTML = book.author;
            isbnCell.innerHTML = book.isbn;

            this.tableBody.append(row);

        }
    }
}

const ui = new UserInterface();
ui.bindEventListener();