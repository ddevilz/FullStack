// Add Button on Navbar
const element =  document.querySelector(".btn");

element.parentElement.classList.add('new-class');

const addBtn = document.createElement("a")
addBtn.innerHTML = "Pro Sub"
addBtn.setAttribute("class", 'btn')

const btn = document.querySelector(".new-class")

btn.appendChild(addBtn)


// adding recipes
const divElement = document.querySelector('div:not([class]):not([id])');

const addElement = document.createElement("a")
addElement.innerHTML = "Chinese (7)"
addElement.setAttribute("href", '#')

divElement.appendChild(addElement)

// add card
const addCard = document.querySelector(".recipe-gallery");

const addNewCard = document.createElement("div")
addNewCard.setAttribute('class', 'card')
addNewCard.innerHTML = "<h1>6th Card here</h1>"


addCard.appendChild(addNewCard)
