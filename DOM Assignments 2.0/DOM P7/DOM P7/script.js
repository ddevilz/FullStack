const nodeList = document.querySelectorAll("a[target]");
console.log(nodeList);

nodeList.forEach(e => {
    if (e.textContent.includes('2.0')){
        e.style.display = 'none';
    }
})

const mInput = document.querySelector(".main__form-input");
const mButton = document.querySelector(".main__form-btn");

mInput.removeAttribute("disabled");
mButton.removeAttribute("disabled");

document.querySelector('form').onsubmit = () => {
    const a = document.createElement('a');
    a.innerHTML = mInput.value;
    a.setAttribute("target", 'blank');
    a.setAttribute('href', 'https://www.ineuron.ai');
    document.querySelector('.main__languages').append(a);
    mInput.value = '';
    return false;
}
