const input = document.querySelector('#autocomplete-dropdown-input');
const label = document.querySelector('#autocomplete-dropdown-label')
const ul = document.querySelector('#item-list');
const inputWrapper = document.querySelector('.input-wrapper');

const autocompleteDropdown = document.querySelector('.autocomplete-dropdown')

input.onfocus = () => {
    ul.style.display = 'block';
    label.classList.add('label-for-input-focused');
    inputWrapper.classList.add('focused');
}

window.onclick = (event) => {

    if (!autocompleteDropdown.contains(event.target)) {
        ul.style.display = 'none';
        label.classList.remove('label-for-input-focused');
        inputWrapper.classList.remove('focused');
        input.value = '';
    }

}
inputWrapper.onclick = (event) => {
    event.stopPropagation();
    input.focus();
}

ul.onclick = (event) => {
    event.stopPropagation();

    if (event.target.tagName !== "LI") return;

    input.value = event.target.innerText;
    ul.style.display = 'none';
}