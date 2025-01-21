"use strict";
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");
openBtn.addEventListener("click", () => {
    modal.showModal();
});
// openBtn.addEventListener("close", () => {
//   modal.close();
// });
modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
        modal.close();
    }
});
// Basically the dialog element has .showModal and .show(for non modal way) and .close methods and we call them with the buttons
