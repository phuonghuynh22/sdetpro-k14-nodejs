class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.isCheckout = false;
    }

    borrowBook(){
        if(!this.isCheckout){
            console.log("Checking out the book...");
            this.isCheckout = true;
        } else {
            console.log("Not available!");
        }
    }

    returnBook(){
        this.isCheckout = false;
    }
}

class Library{

    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
        console.log(`Current books: ${JSON.stringify(this.books)}`);
    }

    removeBook(book){
        const bookIndex = this.books.indexOf(book);
        const isBookExisting = bookIndex !== -1;
        if(isBookExisting){
            this.books.splice(bookIndex, 1);
        } else{
            console.log("This book is not in this library to remove!");
        }
    }

    searchByTitle(){
        // TODO: implement this
    }

    searchByAuthor(){
        // TODO: implement this
    }
}


// In-memory (RAM) DB

const library = new Library();
const book1 = new Book("Hoc JS trong 1 thap ky", "Teo");
const book2 = new Book("Hoc JS trong 24h", "Ti");
library.addBook(book1);
library.addBook(book2);
// TODO: search book by title, author

book1.borrowBook();
book1.borrowBook();

