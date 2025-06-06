const addbook = document.querySelector("#addbook")
const titleinput = document.querySelector("#titleinput")
const authorinput = document.querySelector("#authorinput")
const pagesinput = document.querySelector("#pagesinput")
const readprompt = document.querySelector("#readprompt")
const formaddd = document.querySelector("#formaddd")
const booksection = document.querySelector(".booksection")
const formarea = document.querySelector('.formarea')
const xicon = document.querySelector("#xicon")


const svgpaste = '<svg id="xicon2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'

let myLibrary = []

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = id
    }

}

xicon.addEventListener('click', () => {
    formarea.classList.remove('show')
})

addbook.addEventListener('click', () => {
    formarea.classList.add('show')
})

formaddd.addEventListener('click', () => {
        const newbook = new Book(titleinput.value, authorinput.value, pagesinput.value, readprompt.checked, crypto.randomUUID())
        addToLibrary(newbook)
        renderBook(newbook)
        formarea.classList.remove('show')
        titleinput.value = ''
        authorinput.value = ''
        pagesinput.value = ''
        readprompt.checked = false
})

function addToLibrary(bookobj) {
    myLibrary.push(bookobj)
}

function renderBook(bookobj) {
    const newbook = document.createElement('div')
    newbook.classList.add('book')
    booksection.appendChild(newbook)


    const deletecard = document.createElement("div")
    deletecard.classList.add('deletecard')
    deletecard.innerHTML = svgpaste
    const titlecard = document.createElement("div")
    titlecard.classList.add('titlecard')
    const authorcard = document.createElement("div")
    authorcard.classList.add('authorcard')
    const pagescard = document.createElement("div")
    pagescard.classList.add('pagescard')
    const notread = document.createElement("div")
    notread.classList.add('notread')
    const yesread = document.createElement("div")
    yesread.classList.add('yesread')

    newbook.appendChild(deletecard)
    newbook.appendChild(titlecard)
    newbook.appendChild(authorcard)
    newbook.appendChild(pagescard)
    newbook.appendChild(notread)
    newbook.appendChild(yesread)



    titlecard.textContent = `${bookobj.title}`
    authorcard.textContent = `By: ${bookobj.author}`
    pagescard.textContent = `${bookobj.pages} Pages`
    if (bookobj.read === true) {
        notread.style.display = 'none'
        yesread.style.display = 'inline-block'
        yesread.textContent = 'Already read'

    }
    else {
        yesread.style.display = 'none'
        notread.style.display = 'inline-block'
        notread.textContent = 'Not read yet'
    }
    yesread.addEventListener('click', () => {
        bookobj.read = false
        yesread.style.display = 'none'
        notread.style.display = 'inline-block'
        notread.textContent = 'Not read yet'
    })
    
    notread.addEventListener('click', () => {
        bookobj.read = true
        notread.style.display = 'none'
        yesread.style.display = 'inline-block'
        yesread.textContent = 'Already read'
    })

    deletecard.addEventListener('click', () => {
        newbook.remove()
    })
}