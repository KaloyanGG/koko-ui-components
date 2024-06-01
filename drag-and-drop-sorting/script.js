"use strict";
const ol = document.querySelector('ol');
const liItems = document.querySelectorAll('li');
const submitBtn = document.querySelector('button#add-item');
const inputElement = document.querySelector('input');
const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    const value = inputElement.value.trim();
    if (!value) {
        return alert('Please insert a value');
    }
    const li = document.createElement('li');
    li.addEventListener('dragstart', (event) => {
        li.classList.add('dragged');
    });
    li.addEventListener('dragend', () => {
        li.classList.remove('dragged');
    });
    li.draggable = true;
    li.setAttribute('id', (Array.from(ol.children)
        .reduce((maxId, li) => Math.max(maxId, parseInt(li.id)), 0) + 1)
        .toString());
    li.textContent = value;
    ol.appendChild(li);
    inputElement.value = '';
};
ol.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    const hoveredElem = ev.target;
    const draggedElement = ol.querySelector('.dragged');
    if (hoveredElem !== draggedElement && hoveredElem.tagName === "LI") {
        if (draggedElement.getBoundingClientRect().top < hoveredElem.getBoundingClientRect().top) {
            // If the dragged element is above the hovered element, insert the dragged element before the next sibling of the hovered element
            if (hoveredElem.nextSibling) {
                ol.insertBefore(draggedElement, hoveredElem.nextSibling);
            }
            else {
                ol.appendChild(draggedElement);
            }
        }
        else {
            // If the dragged element is below the hovered element, insert the dragged element before the hovered element
            ol.insertBefore(draggedElement, hoveredElem);
        }
    }
});
liItems.forEach((li) => {
    li.addEventListener('dragstart', (event) => {
        li.classList.add('dragged');
    });
    li.addEventListener('dragend', () => {
        li.classList.remove('dragged');
    });
});
// function throttle(operation: (event: DragEvent) => void, ms: number) {
//     let hasExecuted = false
//     return function throttledOperation(event: DragEvent) {
//         if (!hasExecuted) {
//             hasExecuted = true
//             operation(event)
//             setTimeout(() => {
//                 hasExecuted = false
//             }, ms)
//         }
//     }
// }
