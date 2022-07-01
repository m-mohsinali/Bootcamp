let OutputScreen = document.getElementById('outputscreen');

function Display(num) {
    OutputScreen.value += num;
}
function Calculate() {
    try {
        OutputScreen.value = eval(OutputScreen.value);
    }
    catch (err) {
        alert("Invalid");
    }
}
function Clear() {
    OutputScreen.value = "";
}

function Delete() {
    OutputScreen.value = OutputScreen.value.slice(0, -2);
}
