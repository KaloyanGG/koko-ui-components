"use strict";
function renderDragAndDrop(container, contents) {
    container.innerHTML += `
    <div class="drag-and-drop">
        <ol>
            ${contents.map((c, idx) => `<li id=${idx} draggable="true">${c}</li>`).join('')}
        </ol>
        <form class="functionality-wrapper">
            <input type="text">
            <button id="add-item" type="submit">Add</button>
        </form>
    </div>
    `;
    const ol = container.querySelector('ol');
    const liItems = container.querySelectorAll('li');
    const inputElement = container.querySelector('input');
    const form = container.querySelector('form');
    form.onsubmit = formOnSubmit;
    ol.ondragover = olOnDragover;
    liItems.forEach((li) => {
        li.addEventListener('dragstart', () => {
            li.classList.add('dragged');
        });
        li.addEventListener('dragend', () => {
            li.classList.remove('dragged');
        });
    });
    function formOnSubmit(event) {
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
    }
    function olOnDragover(ev) {
        ev.preventDefault();
        const hoveredElem = ev.target;
        const draggedElement = ol.querySelector('.dragged');
        if (hoveredElem !== draggedElement && hoveredElem.tagName === "LI") {
            const referenceNode = draggedElement.getBoundingClientRect().top < hoveredElem.getBoundingClientRect().top
                ? hoveredElem.nextSibling
                : hoveredElem;
            ol.insertBefore(draggedElement, referenceNode);
        }
    }
}
const container = document.querySelector('.container');
container
    ? renderDragAndDrop(container, ['Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Chevrolet Camaro', 'BMW 3 Series', 'Mercedes-Benz C-Class', 'Audi A4', 'Porsche'])
    : alert('Container not found.');
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
