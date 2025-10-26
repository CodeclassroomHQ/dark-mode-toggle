// dark-mode-toggle.js

/* 1. Grab a hold of HTML Elements */
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

/* 2. The Toggle Function:
      Toggles the root element's class (Default in Light Mode) */
function toggleDarkMode() {
    // Toggle the 'dark' class on the <html> element
    htmlElement.classList.toggle('dark');

    // Persist preferences to localStorage
}

/* 3. Attach the Click Event Listener
      Attach the toggle function to the button click */
toggleButton.addEventListener('click', toggleDarkMode);