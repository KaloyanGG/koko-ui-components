function renderDragAndDrop(container: Element, contents: string[]) {
    container.innerHTML += `
    <div class="drag-and-drop">
        <ol>
            ${contents.map((c, idx) => `<li id=${idx} class="hoverable" draggable="true">${c}
                <svg width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </li>`).join('')}
        </ol>
        <form class="functionality-wrapper">
            <input type="text">
            <button id="add-item" type="submit">Add</button>
        </form>
    </div>
    `
    const ol = container.querySelector('ol')!;
    const liItems = container.querySelectorAll('li');
    const inputElement = container.querySelector('input')!;
    const form = container.querySelector('form')!;
    const svgs = container.querySelectorAll('svg')!;

    form.onsubmit = formOnSubmit;
    ol.ondragover = olOnDragover;
    svgs.forEach((svg: SVGSVGElement) => {
        svg.onclick = svgOnClick
    })


    liItems.forEach((li: HTMLLIElement) => {
        li.addEventListener('dragstart', () => {
            li.classList.add('dragged')
            liItems.forEach(li => li.classList.remove('hoverable'))
        })

        li.addEventListener('dragend', () => {
            li.classList.remove('dragged')
            liItems.forEach(li => li.classList.add('hoverable'))
        })
    })

    function formOnSubmit(event: SubmitEvent) {
        event.preventDefault();
        const value = inputElement.value.trim();
        if (!value) {
            return alert('Please insert a value');
        }
        const li = document.createElement('li');
        li.addEventListener('dragstart', (event) => {
            li.classList.add('dragged');
        })

        li.addEventListener('dragend', () => {
            li.classList.remove('dragged');
        })
        li.classList.add('hoverable');
        li.draggable = true;
        li.setAttribute(
            'id',
            (Array.from(ol.children)
                .reduce((maxId, li) => Math.max(maxId, parseInt(li.id)), 0) + 1)
                .toString()
        );
        li.innerHTML = `${value}
        <svg class="delete-icon" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>`;
        li.querySelector('svg')!.onclick = svgOnClick
        ol.appendChild(li);
        inputElement.value = '';
    }

    function olOnDragover(ev: DragEvent) {
        ev.preventDefault();
        const hoveredElem = ev.target as HTMLLIElement | HTMLOListElement;
        const draggedElement = ol.querySelector('.dragged') as HTMLLIElement;

        if (hoveredElem !== draggedElement && hoveredElem.tagName === "LI") {
            const referenceNode = draggedElement.getBoundingClientRect().top < hoveredElem.getBoundingClientRect().top
                ? hoveredElem.nextSibling
                : hoveredElem;
            ol.insertBefore(draggedElement, referenceNode);
        }
    }

    function svgOnClick(ev: MouseEvent) {
        const target = ev.target as HTMLElement;
        const parentLi = target.closest('li')!;
        parentLi.remove();
    }
}
const container = document.querySelector('.container');
container
    ? renderDragAndDrop(container, ['Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Chevrolet Camaro', 'BMW 3 Series', 'Mercedes-Benz C-Class', 'Audi A4', 'Porsche'])
    : alert('Container not found.')

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