function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function addOperator(operator) {
    var display = document.getElementById('display');
    var lastChar = display.value.slice(-1);
    if (!isNaN(lastChar) || lastChar == '.') {
        display.value += operator;
    }
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
