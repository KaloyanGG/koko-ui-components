// alert('hi')

/**
 * @param {Event} event - The event object
 */
function openBonusInfo(event) {

    const divExpandCollapse = event.target.parentElement.parentElement.parentElement

    const showBonusInfoButton = divExpandCollapse.querySelector('#show-bonus-info');
    const bonusInfo = divExpandCollapse.querySelector('.bonus-info')
    // const content = document.querySelector('.content')
    // const expandCollapseBtn = document.querySelector('.expand-collapse-bgn')

    showBonusInfoButton.classList.toggle('rotated');
    bonusInfo.classList.toggle('display-block')

    // content.style.height = "unset";
    // expandCollapseBtn.style.height = "unset";

}
