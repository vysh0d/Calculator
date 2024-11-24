function appendToDisplay(value) {
    if (value === 'sqrt(') {
        document.getElementById('display').value += '√(';
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;
    expression = expression.replace(/√\(/g, 'Math.sqrt(');
    try {
        let result = eval(expression);
        if (isNaN(result)) {
            document.getElementById('display').value = 'Error';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Theme toggle functionality
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    toggleThemeButton.textContent = isDarkMode
        ? 'Switch to Light Theme'
        : 'Switch to Dark Theme';
});
