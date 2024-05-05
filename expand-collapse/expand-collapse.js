"use strict";
const buttonsArray = Array.from(document.getElementsByClassName('expand-collapse-btn'));
buttonsArray.forEach(button => {
    button.addEventListener('click', (event) => {
        const divExpandCollapse = event.target.parentElement.parentElement;
        const bonusInfo = divExpandCollapse.querySelector('.bonus-info');
        const showBonusInfoSvg = divExpandCollapse.querySelector('#show-bonus-info').querySelector('svg');
        showBonusInfoSvg.classList.toggle('rotated');
        bonusInfo.style.maxHeight = bonusInfo.style.maxHeight
            ? ''
            : bonusInfo.scrollHeight + "px";
    });
});
