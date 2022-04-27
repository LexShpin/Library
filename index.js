const addBookForm = document.querySelector('.add-book-form')
const addBookBtn = document.querySelector('.add-book-btn')
const bookCards = document.querySelector('.book-cards')
const removeBtns = document.querySelectorAll('.remove')

const authorInput = document.querySelector('#author')
const titleInput = document.querySelector('#title')
const pagesInput = document.querySelector('#pages')
const isReadInput = document.querySelector('#isRead')

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

    let card = document.createElement('div')
        let cardTitle = document.createElement('div')
        let cardAuthor = document.createElement('div')
        let cardPages = document.createElement('div')
        let isReadToggle = document.createElement('button')
        let removeBtn = document.createElement('button')

        // Adding classes for each element
        card.classList.add('card')
        cardTitle.classList.add('title')
        cardAuthor.classList.add('author')
        cardPages.classList.add('pages')
        
        isReadToggle.classList.add('card-btn')
        if (newBook.isRead) {
            isReadToggle.classList.add('read')
        } else {
            isReadToggle.classList.add('not-read')
        }

        removeBtn.classList.add('card-btn')
        removeBtn.classList.add('remove')

        // Filling in the content of the elements
        cardTitle.textContent = newBook.title
        cardAuthor.textContent = newBook.author
        cardPages.textContent = newBook.pages

        isReadToggle.textContent = newBook.isRead ? 'Read' : 'Not read'
        isReadToggle.addEventListener('click', () => {
            if (newBook.isRead) {
                isReadToggle.classList.remove('read')
                isReadToggle.classList.add('not-read')
                isReadToggle.textContent = 'Not read'
                newBook.isRead = false
            } else {
                isReadToggle.classList.remove('not-read')
                isReadToggle.classList.add('read')
                isReadToggle.textContent = 'Read'
                newBook.isRead = true
            }
        })
        

        removeBtn.textContent = 'Remove'
        removeBtn.onclick = removeBook

        // Appending the elements to the DOM
        card.appendChild(cardTitle)
        card.appendChild(cardAuthor)
        card.appendChild(cardPages)
        card.appendChild(isReadToggle)
        card.appendChild(removeBtn)

        bookCards.appendChild(card)
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

    addBookForm.reset()
})

const removeBook = (e) => {

    e.target.parentNode.remove()
}