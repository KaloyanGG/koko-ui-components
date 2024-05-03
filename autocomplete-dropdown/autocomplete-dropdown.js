const autocompleteDropdown = document.querySelector('.autocomplete-dropdown')
const inputWrapper = document.querySelector('.input-wrapper');
const ulItemList = document.querySelector('#item-list');

const label = document.querySelector('#autocomplete-dropdown-label');
const input = document.querySelector('#autocomplete-dropdown-input');

const svgCancel = document.querySelector('#cancel');
const svgArrow = document.querySelector('#dropdown-arrow');

let liContents = Array.from(document.querySelectorAll('#item-list li')).map(li => li.innerText);

// input.addEventListener('focus', (event) => {
//     console.log('focused')
// })
// input.addEventListener('blur', (event) => {

//     console.log('blurred')
// })

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
        input.value = '';
        input.blur();
    }

})

svgArrow.addEventListener('click', (event) => {
    event.stopPropagation();

    svgArrow.classList.toggle('rotated');
    ulItemList.classList.toggle('d-block');
    label.classList.add('label-for-input-focused');

    input.focus();
})

ulItemList.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.tagName !== "LI") return;

    svgArrow.classList.toggle('rotated');
    ulItemList.classList.toggle('d-block');

    input.value = event.target.innerText;
    input.focus();

})

input.addEventListener('input', (event) => {
    const value = event.target.value;
    ulItemList.classList.add('d-block');

    const updatedList = liContents.filter((content) => {
        return content.toLowerCase().includes(value.toLowerCase());
    })

    updateList(updatedList);
})

function updateList(updatedList) {
    
    ulItemList.innerHTML = '';
    // console.log('-input')
    // // debugger;

    if (updatedList.length === 0) {
        const p = document.createElement('div');
        p.style.padding = "2% 2%";
        p.innerText = 'No options';
        ulItemList.appendChild(p);
        console.log(ulItemList)
        return;
    }

    updatedList.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ulItemList.appendChild(li);
    });
}


function isFocused(elem) {
    return document.activeElement === elem;
}



