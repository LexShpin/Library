const addBookForm = document.querySelector('.add-book-form')
const addBookBtn = document.querySelector('.add-book-btn')
const bookCards = document.querySelector('.book-cards')
const removeBtns = document.querySelectorAll('.remove')

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

        // Creating all the elements for the card
        let card = document.createElement('div')
        let cardTitle = document.createElement('div')
        let cardAuthor = document.createElement('div')
        let cardPages = document.createElement('div')
        let isRead = document.createElement('button')
        let removeBtn = document.createElement('button')

        // Adding classes for each element
        card.classList.add('card')
        cardTitle.classList.add('title')
        cardAuthor.classList.add('author')
        cardPages.classList.add('pages')
        
        isRead.classList.add('card-btn')
        if (book.isRead) {
            isRead.classList.add('read')
        } else {
            isRead.classList.add('not-read')
        }

        removeBtn.classList.add('card-btn')
        removeBtn.classList.add('remove')

        // Filling in the content of the elements
        cardTitle.textContent = book.title
        cardAuthor.textContent = book.author
        cardPages.textContent = book.pages
        isRead.textContent = book.isRead == true ? 'Read' : 'Not read'
        removeBtn.textContent = 'Remove'

        // Appending the elements to the DOM
        card.appendChild(cardTitle)
        card.appendChild(cardAuthor)
        card.appendChild(cardPages)
        card.appendChild(isRead)
        card.appendChild(removeBtn)

        bookCards.appendChild(card)
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
    displayAllBooks(myLibrary)
})

// Removing the card
// removeBtns.forEach(button => button.addEventListener('click', () => ))