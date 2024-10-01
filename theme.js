document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');

    // Check for saved user preference and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeSwitch.checked = savedTheme === 'dark'; // Set the checkbox state based on saved preference
    }

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Save user preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
