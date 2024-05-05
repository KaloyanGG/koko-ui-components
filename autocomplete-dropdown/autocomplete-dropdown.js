const autocompleteDropdown = document.querySelector('.autocomplete-dropdown')
const inputWrapper = document.querySelector('.input-wrapper');
const ulItemList = document.querySelector('#item-list');

const label = document.querySelector('#autocomplete-dropdown-label');
const input = document.querySelector('#autocomplete-dropdown-input');

const svgCancel = document.querySelector('#cancel');
const svgArrow = document.querySelector('#dropdown-arrow')
const svgArrowBtn = document.querySelector('#svg-btn-arrow');
const svgCancelBtn = document.querySelector('#svg-btn-cancel');

let liContents = [
    'To Kill a Mockingbird',
    'The Catcher in the Rye',
    '1984',
    'The Great Gatsby',
    'Pride and Prejudice',
    'Pride and Prejudice 2',
    'The Lord of the Rings',
    'The Hobbit',
    'War and Peace',
    'One Hundred Years of Solitude',
    'The Grapes of Wrath',
    'The Da Vinci Code',
];

fillItemList();

window.addEventListener('click', (event) => {

    if (autocompleteDropdown.contains(event.target)) {
        input.focus();
        label.classList.add('label-for-input-focused');
        inputWrapper.classList.add('focused');
        svgArrow.classList.add('rotated');
        ulItemList.classList.add('d-block');
    } else {
        event.preventDefault();
        ulItemList.classList.remove('d-block');
        label.classList.remove('label-for-input-focused');
        inputWrapper.classList.remove('focused');
        svgArrow.classList.remove('rotated');
        svgCancelBtn.classList.remove('d-block');
        input.value = '';
        input.blur();
        fillItemList();
    }

})

svgArrowBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    svgArrow.classList.toggle('rotated');
    svgArrowBtn.classList.remove('animated');
    ulItemList.classList.toggle('d-block');
    label.classList.add('label-for-input-focused');

    input.focus();

    svgArrowBtn.classList.add('animated');
})

svgCancelBtn.addEventListener('click', (event) => {
    event.stopImmediatePropagation();

    input.value = '';
    fillItemList();

    svgCancelBtn.classList.remove('d-block');
    input.focus();

})


//! impossible because of the input.focus() for some reason
// svgArrow.addEventListener('mousedown', (event) => {
//     svgArrow.classList.remove('animated');
//     void svgArrow.offsetWidth;

//     svgArrow.classList.add('animated');
// })


ulItemList.addEventListener('click', (event) => {
    event.stopPropagation();

    if (event.target.tagName !== "LI" || event.target.textContent === "No options") return;

    ulItemList.classList.toggle('d-block');

    input.value = event.target.innerText;
    svgCancelBtn.classList.add('d-block');
    input.focus();

})

input.addEventListener('input', (event) => {
    const value = event.target.value;
    ulItemList.classList.add('d-block');
    console.log(ulItemList)
    const updatedList = liContents.filter((content) => {
        return content.toLowerCase().includes(value.toLowerCase());
    })

    updateList(updatedList);
})

function updateList(updatedList) {

    ulItemList.innerHTML = '';

    if (updatedList.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No options';
        li.classList.add('no-hover');
        li.style.color = 'gray';
        ulItemList.appendChild(li);
        console.log(ulItemList)
        return;
    }

    updatedList.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ulItemList.appendChild(li);
    });
}

function fillItemList() {
    ulItemList.innerHTML = '';

    liContents.forEach(content => {
        const li = document.createElement('li');
        li.textContent = content;
        ulItemList.appendChild(li);
    });
}