/**
 * @param {Event} event - The event object
 */
function openBonusInfo(event) {
    const divExpandCollapse = event.target.parentElement.parentElement;
    const showBonusInfoButton = divExpandCollapse.querySelector('#show-bonus-info');
    const bonusInfo = divExpandCollapse.querySelector('.bonus-info');

    showBonusInfoButton.classList.toggle('rotated');
    bonusInfo.style.maxHeight = bonusInfo.style.maxHeight
        ? null
        : bonusInfo.scrollHeight + "px";
}
