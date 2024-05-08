type Data = {
    title: string,
    items: string[],
}
function renderAutocompleteDropdown(container: HTMLElement, data: Data) {
    container.innerHTML += `
    <div class="autocomplete-dropdown">
        <div class="input-wrapper">
            <label for="i" class="autocomplete-dropdown-label" for="autocomplete-dropdown-input">${data.title}</label>
            <input id="i"autocomplete="off" type="text" name="autocomplete-dropdown-input" class="autocomplete-dropdown-input">
            <button type="button" class="svg-btn-cancel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
                    </path>
                </svg>
            </button>
            <button type="button" class="svg-btn-arrow">
                <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16L6 10H18L12 16Z"></path>
                </svg>
            </button>
        </div>
        <ul class="item-list">
            ${data.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    </div>
    `
    const autocompleteDropdown = container.querySelector('.autocomplete-dropdown') as HTMLDivElement;
    const inputWrapper = container.querySelector('.input-wrapper') as HTMLDivElement;
    const ulItemList = container.querySelector('.item-list') as HTMLUListElement;

    const label = container.querySelector('.autocomplete-dropdown-label') as HTMLLabelElement;
    const input = container.querySelector('.autocomplete-dropdown-input') as HTMLInputElement;

    const svgArrow = container.querySelector('.dropdown-arrow') as SVGElement;
    const svgArrowBtn = container.querySelector('.svg-btn-arrow') as HTMLButtonElement;
    const svgCancelBtn = container.querySelector('.svg-btn-cancel') as HTMLButtonElement;

    window.addEventListener('click', (event) => {
        if (autocompleteDropdown.contains((event.target as HTMLElement))) {
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

    //! impossible because of the input.focus() for some reason
    // svgArrow.addEventListener('mousedown', (event) => {
    //     svgArrow.classList.remove('animated');
    //     void svgArrow.offsetWidth;

    //     svgArrow.classList.add('animated');
    // })

    svgCancelBtn.addEventListener('click', (event) => {
        event.stopPropagation();

        input.value = '';

        svgCancelBtn.classList.remove('d-block');
        input.focus();
    })

    ulItemList.addEventListener('click', (event) => {
        event.stopPropagation();
        const target = event.target as HTMLUListElement;

        if (target.tagName !== "LI" || target.textContent === "No options") return;

        ulItemList.classList.toggle('d-block');

        input.value = target.innerText;
        svgCancelBtn.classList.add('d-block');
        input.focus();
    })

    input.addEventListener('input', (event) => {
        const value = (event.target as HTMLInputElement).value;
        ulItemList.classList.add('d-block');
        const updatedList = data.items.filter((content) => {
            return content.toLowerCase().includes(value.toLowerCase());
        })

        updateList(updatedList);
    })

    function updateList(updatedList: string[]) {

        ulItemList.innerHTML = '';

        if (updatedList.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No options';
            li.classList.add('no-hover');
            li.style.color = 'gray';
            ulItemList.appendChild(li);
            return;
        }

        updatedList.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            ulItemList.appendChild(li);
        });
    }
}

const main = document.querySelector('main')!;

renderAutocompleteDropdown(main.querySelector('#a-d-1')!, {
    title: 'Fruit',
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Kiwi', 'Orange', 'Peach', 'Pear', 'Plum']
}); 
renderAutocompleteDropdown(main.querySelector('#a-d-2')!, {
    title: 'Movie',
    items: ['Avengers', 'Black Panther', 'Inception', 'Interstellar', 'Interstellar', 'The Dark Knight', 'The Shawshank Redemption', 'Pulp Fiction', 'Fight Club', 'The Matrix', 'Forrest Gump']
});

// renderAutocompleteDropdown(main, {
//     title: 'Movie',
//     items: ['Avengers', 'Black Panther', 'Inception', 'Interstellar', 'Interstellar 2', 'The Dark Knight', 'The Shawshank Redemption', 'Pulp Fiction', 'Fight Club', 'The Matrix', 'Forrest Gump']
// });