type Content = {
    mainInfo: string,
    bonusInfo: string,
}
function renderExpandCollapse(container: HTMLElement, content: Content) {

    container.innerHTML += `
    <div class="expand-collapse">
        <div class="row">
            <div class="content">
            ${content.mainInfo}
            </div>
            <button class="expand-collapse-btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                </svg>
            </button>
        </div>
        <div class="bonus-info">
            ${content.bonusInfo}
        </div>
    </div>
    `

    const button = container.querySelector('.expand-collapse-btn') as HTMLButtonElement;
    button.addEventListener('click', (event: MouseEvent) => {
        const divExpandCollapse = (event.target as HTMLElement).parentElement!.parentElement as HTMLDivElement;
        const bonusInfo = divExpandCollapse.querySelector('.bonus-info') as HTMLDivElement;

        const showBonusInfoSvg = divExpandCollapse!.querySelector('.expand-collapse-btn')!.querySelector('svg')!;
        showBonusInfoSvg.classList.toggle('rotated');
        bonusInfo.style.maxHeight = bonusInfo.style.maxHeight
            ? ''
            : bonusInfo.scrollHeight + "px";
    })


}

const main = document.querySelector('main')!;

renderExpandCollapse(main.querySelector('#e-c-1')!, {
    mainInfo: 'Main info...',
    bonusInfo: 'Bonus info...'
});

renderExpandCollapse(main.querySelector('#e-c-2')!, {
    mainInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestias.",
    bonusInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus corporis debitis ducimus dolores in omnis minima aut ut ratione officiis, maiores voluptatibus nulla vero explicabo laborum ullam ad quibusdam molestiae quaerat. Animi impedit deserunt quo qui odit doloribus, aliquam ratione error repellendus, minus magnam, quam vel atque praesentium quos nemo."
});