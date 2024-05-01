

const input = document.querySelector('#autocomplete-dropdown-input');
const label = document.querySelector('#autocomplete-dropdown-label')
const ul = document.querySelector('#item-list');

input.onfocus = () => {
    ul.style.display = 'block';
    label.classList.toggle('label-for-input-focused');
}

input.onblur = () => {
    ul.style.display = 'none';
    label.classList.toggle('label-for-input-focused');

}