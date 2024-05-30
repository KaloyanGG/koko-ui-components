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
    li.setAttribute('id', (Array.from(ol.children)
        .reduce((maxId, li) => Math.max(maxId, parseInt(li.id)), 0) + 1)
        .toString());
    li.textContent = value;
    ol.appendChild(li);
    inputElement.value = '';
};
ol.addEventListener('dragover', (event) => {
    event.preventDefault();
    const hoveredElem = event.target;
    const draggedElement = ol.querySelector('.dragged');
    const height = draggedElement.getBoundingClientRect().height;
    const no = document.querySelector('.no-pointer-events');
    if (hoveredElem.tagName === "LI"
        && hoveredElem !== draggedElement
    // && no === null
    ) {
        // console.log(no)
        // console.log(hoveredElem)
        const positionHovered = parseInt(hoveredElem.getAttribute('data-position'));
        const positionDragged = parseInt(draggedElement.getAttribute('data-position'));
        if (positionDragged > positionHovered) {
            if (hoveredElem.moved !== true) {
                hoveredElem.style.transform = `translateY(${height}px)`;
                hoveredElem.moved = true;
                draggedElement.style.transform = `translateY(${height * (positionHovered - positionDragged)}px)`;
            }
            else {
                hoveredElem.style.transform = ``;
                hoveredElem.moved = false;
                draggedElement.style.transform = `translateY(${height * (positionHovered - positionDragged + 1)}px)`;
            }
        }
        else {
            if (hoveredElem.moved !== true) {
                hoveredElem.style.transform = `translateY(-${height}px)`;
                hoveredElem.moved = true;
                draggedElement.style.transform = `translateY(${height * (positionHovered - positionDragged)}px)`;
            }
            else {
                hoveredElem.style.transform = ``;
                hoveredElem.moved = false;
                draggedElement.style.transform = `translateY(${height * (positionHovered - positionDragged - 1)}px)`;
            }
        }
    }
});
// function getNumberOfElementsWeWentInto(event: DragEvent, parent: HTMLElement, heightOfOneElement: number) {
//     const mouseY = event.clientY;
//     const firstChildTop = parent.firstElementChild!.getBoundingClientRect().top;
//     const mouseDistanceFromFirstChildTop = mouseY - firstChildTop;
//     return Math.floor(mouseDistanceFromFirstChildTop / heightOfOneElement);
// }
liItems.forEach((li) => {
    li.moved = false;
    li.addEventListener('transitionstart', () => {
        li.classList.add('no-pointer-events');
    });
    li.addEventListener('transitionend', () => {
        li.classList.remove('no-pointer-events');
    });
    li.addEventListener('dragstart', (event) => {
        // setTimeout(() => {
        li.classList.add('dragged');
        // }, 0)
        // li.setAttribute('initialY', `${event.clientY}`)
    });
    li.addEventListener('dragend', () => {
        li.classList.remove('dragged');
    });
});
