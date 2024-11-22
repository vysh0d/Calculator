//This is the fuction to append characters to display
function appendToDisplay(value) {
    // If the value is 'sqrt(', replace it with the symbol '√(' for display
    if (value === 'sqrt(') {
        document.getElementById('display').value += '√(';  // Display √ symbol
    } else {
        document.getElementById('display').value += value;
    }
}

//This function is to clear display
function clearDisplay()
{
    document.getElementById('display').value = '';
}

//This function is to handle the backspace. It will remove the last character
function backspace()
{
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

//This functio is to calculate the result 
function calculate()
{
    let expression = document.getElementById('display').value;

    // Handle square root by replacing 'sqrt(' with Math.sqrt
    expression = expression.replace(/√\(/g, 'Math.sqrt(');

    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    }
    catch (error) 
    {
        document.getElementById('display').value = 'Error';
    }

}