// var elem = document.querySelector('.accordian');
var parentElem = document.querySelector('.accordian-wrapper');

// var clone = elem.cloneNode(true);

// parentElem.append(clone);

// document.querySelector('.accordian')[4].querySelector('h3').innerHTML = "Skills"
let elem = document.createElement('div')
elem.classList.add('accordian')
parentElem.appendChild(elem)

let head = document.createElement('h3')
head.innerText = "Skills"

elem.appendChild(head)

let p = document.createElement('p')
p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
p.style.display = "block"

elem.appendChild(p)