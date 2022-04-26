const addBookForm = document.querySelector('.add-book-form')
const addBookBtn = document.querySelector('.add-book-btn')

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

addBookBtn.addEventListener('click', () => {
    addBookForm.style.display = 'flex'
})

addBookForm.addEventListener('submit', (e) => {
    const formData = new FormData(e.target)
    
    e.preventDefault()
    addBookForm.style.display = 'none'

    let title = formData.get('title')
    let author = formData.get('author')
    let pages = formData.get('pages')
    let isRead = formData.get('isRead')

    addBookToLibrary(title, author, pages, isRead)
    console.log(myLibrary)
})