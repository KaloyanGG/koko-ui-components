"use strict";
//* ol
const orderedList = document.querySelector('ol');
//* li list items
const draggableListItems = document.querySelectorAll('li');
orderedList.addEventListener('dragover', (event) => {
    event.preventDefault();
    let offset = Number.NEGATIVE_INFINITY;
    let closestElement;
    for (const listItem of draggableListItems) {
        const rect = listItem.getBoundingClientRect();
        const newOffset = event.clientY - rect.top - rect.height / 2;
        if (newOffset < 0 && newOffset > offset) {
            offset = newOffset;
            closestElement = listItem;
        }
    }
    const draggable = document.querySelector('.dragging');
    if (closestElement == null) {
        orderedList.appendChild(draggable);
    }
    else {
        orderedList.insertBefore(draggable, closestElement);
    }
});
draggableListItems.forEach(draggableListItem => {
    draggableListItem.addEventListener('dragstart', (event) => {
        var _a;
        draggableListItem.classList.add('dragging');
        const target = event.target;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text', target.id);
    });
});
draggableListItems.forEach(draggableListItem => {
    draggableListItem.addEventListener('dragend', (event) => {
        draggableListItem.classList.remove('dragging');
    });
});
// function logAboveElement(){
//     const draggableElements = [...container.querySelectorAll('.draggable')];
//     console.log(draggableElements);
// }
function allowDrop(event) {
    // console.log('hi')
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log(event.target);
    event.target.appendChild(document.getElementById(data));
}
function dragStart(event) {
    var _a;
    console.log('drag start');
    const target = event.target;
    (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text', target.id);
}
