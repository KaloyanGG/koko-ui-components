const buttonsArray = Array.from(document.getElementsByClassName('expand-collapse-btn') as HTMLCollectionOf<HTMLButtonElement>);

buttonsArray.forEach(button => {
    button.addEventListener('click', (event: MouseEvent) => {
        const divExpandCollapse = (event.target as HTMLElement).parentElement!.parentElement as HTMLDivElement;
        const bonusInfo = divExpandCollapse.querySelector('.bonus-info') as HTMLDivElement;
        const showBonusInfoSvg = divExpandCollapse!.querySelector('#show-bonus-info')!.querySelector('svg')!;
        
        showBonusInfoSvg.classList.toggle('rotated');
        bonusInfo.style.maxHeight = bonusInfo.style.maxHeight
            ? ''
            : bonusInfo.scrollHeight + "px";
    })
})






