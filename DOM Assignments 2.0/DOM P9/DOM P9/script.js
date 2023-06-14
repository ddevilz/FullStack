const colour = document.querySelectorAll('.title')[1];
colour.style.color = 'red';

const btn = document.querySelector('.add-to-cart');
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'red';
})

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'hsl(158, 36%, 37%)';
})