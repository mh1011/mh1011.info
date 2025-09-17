document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    const themeLabel = document.querySelector('.theme-label');

    // Function to update the label text
    function updateThemeLabel(isDark) {
        themeLabel.textContent = isDark ? 'Light' : 'Dark';
    }

    // 1. Check for saved user preference, if any, and apply it
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            toggleSwitch.checked = true;
            updateThemeLabel(true);
        }
    }

    // 2. Listen for toggle clicks
    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            // Switch to Dark
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateThemeLabel(true);
        } else {
            // Switch to Light
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', '');
            updateThemeLabel(false);
        }
    });
});