//* ol
const orderedList = document.querySelector('ol')!;

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
    const draggable = document.querySelector('.dragging') as HTMLLIElement;
    if (closestElement == null) {
        orderedList.appendChild(draggable);
    }else{
        orderedList.insertBefore(draggable, closestElement)
    }

})


draggableListItems.forEach(draggableListItem => {
    draggableListItem.addEventListener('dragstart', (event) => {
        draggableListItem.classList.add('dragging');

        const target = event.target as HTMLLIElement;
        event.dataTransfer?.setData('text', target.id)
    });
})
draggableListItems.forEach(draggableListItem => {
    draggableListItem.addEventListener('dragend', (event) => {
        draggableListItem.classList.remove('dragging');
    });
})

// function logAboveElement(){
//     const draggableElements = [...container.querySelectorAll('.draggable')];

//     console.log(draggableElements);
// }









function allowDrop(event: DragEvent) {
    // console.log('hi')
    event.preventDefault();
}

function drop(event: DragEvent) {
    event.preventDefault();
    var data = event.dataTransfer!.getData("text");
    console.log(event.target);
    (event.target as HTMLOListElement).appendChild(document.getElementById(data)!);
}
function dragStart(event: DragEvent) {
    console.log('drag start');
    const target = event.target as HTMLLIElement;
    event.dataTransfer?.setData('text', target.id)
}