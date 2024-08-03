const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = 'Switch to Light Theme';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});
