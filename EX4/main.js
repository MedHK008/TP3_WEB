document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('add').addEventListener('click', function(event) {
        event.preventDefault();
        var firstNumber = parseFloat(document.getElementById('num1').value);
        var secondNumber = parseFloat(document.getElementById('num2').value);
        var result = document.getElementById('res');
        result.value = firstNumber + secondNumber;
    });

    document.getElementById('sub').addEventListener('click', function(event) {
        event.preventDefault();
        var firstNumber = parseFloat(document.getElementById('num1').value);
        var secondNumber = parseFloat(document.getElementById('num2').value);
        var result = document.getElementById('res');
        result.value = firstNumber - secondNumber;
    });

    document.getElementById('mul').addEventListener('click', function(event) {
        event.preventDefault();
        var firstNumber = parseFloat(document.getElementById('num1').value);
        var secondNumber = parseFloat(document.getElementById('num2').value);
        var result = document.getElementById('res');
        result.value = firstNumber * secondNumber;
    });

    document.getElementById('div').addEventListener('click', function(event) {
        event.preventDefault();
        var firstNumber = parseFloat(document.getElementById('num1').value);
        var secondNumber = parseFloat(document.getElementById('num2').value);
        var result = document.getElementById('res');
        if (secondNumber !== 0) {
            result.value = firstNumber / secondNumber;
        } else {
            result.value = "Division par zero";
        }
    });
});
