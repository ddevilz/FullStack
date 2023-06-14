const fixOverflow = document.querySelector('.new');
fixOverflow.style.overflow = 'scroll';

document.body.style.background = 'none'

const btn = document.querySelector('.navbar-toggler')

let collapse = document.querySelector(".navbar-collapse");

btn.addEventListener("click", ()=>{
    collapse.classList.toggle("show");
});