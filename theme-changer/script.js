"use strict";
const changeThemeButton = document.getElementById('change-theme');
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}
function changeTheme() {
    const current = getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    updateButtonIcon(next);
}
function updateButtonIcon(theme) {
    changeThemeButton.textContent = theme === 'dark' ? '🌙' : '☀️';
}
changeThemeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    changeTheme();
});
// Set initial theme based on system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = prefersDark ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', initialTheme);
updateButtonIcon(initialTheme);
