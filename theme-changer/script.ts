const changeThemeButton = document.getElementById('change-theme') as HTMLButtonElement;

function getCurrentTheme(): 'light' | 'dark' {
  return document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
}

function changeTheme() {
  const current = getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  updateButtonIcon(next);
}

function updateButtonIcon(theme: 'light' | 'dark') {
  changeThemeButton.textContent = theme === 'dark' ? '🌙' : '☀️';
}

changeThemeButton.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation();
  changeTheme();
});

// Set initial theme based on system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = prefersDark ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', initialTheme);
updateButtonIcon(initialTheme);
