function calculate(operation) {
    const num1 = parseFloat(document.querySelector("#firstNumber").value);
    console.log("num1 =", num1);
    const num2 = parseFloat(document.querySelector("#secondNumber").value);
    console.log("num2 =", num2);

    console.log("operation =", operation);

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter two valid numbers and try again";
    } else {
        switch (operation) {
            case "divide":
                result = `${num1} / ${num2} = ${num1 / num2}`;
                break;
            case "multiply":
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case "subtract":
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case "add":
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            default:
                result = "Try again"
        }
    }
    console.log("result =", result)

    let displayText = `<p>${result}</p>`
    document.querySelector("#display").innerHTML = displayText
}

function clearScreen() {
    document.querySelector("#display").innerHTML = ""
    document.querySelector("#firstNumber").value = ""
    document.querySelector("#secondNumber").value = ""
}