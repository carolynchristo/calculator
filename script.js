// clears the values on the input bar
function clearScreen() {
    document.getElementById("result").value = "";
}

// displays inputted value
function display(value) {
    document.getElementById("result").value += value;
}

// evaluates expression and returns result to be displayed
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}