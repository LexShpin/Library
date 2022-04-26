const addBookForm = document.querySelector('.add-book-form')

let myLibrary = []

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${isRead ? 'yes' : 'no'}`
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead)

    myLibrary.push(newBook)
}

function displayAllBooks(books) {

    books.forEach(book => {
        // displaying all the cards with books
        console.log(book)
    });

}

addBookForm.addEventListener('submit', (e) => {
    // return the data from the submitted form, pass it into the addBookToLibrary function
    // generate a book and push it to the myLibrary array
    e.preventDefault()
    console.log('form submitted')
})