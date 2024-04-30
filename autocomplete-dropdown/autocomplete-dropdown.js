

const input = document.querySelector('#autocomplete-dropdown-input');
const ul = document.querySelector('#item-list');

input.onfocus = () => {
    ul.style.display = 'block';
}

input.onblur = () => {
    ul.style.display = 'none';
}