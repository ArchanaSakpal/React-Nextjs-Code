const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function getUserInput(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log("Arithmetic Operations Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    while (true) {
        const choice = await getUserInput("Choose an option (1-5): ");

        if (choice === '5') {
            console.log("Exiting program...");
            rl.close();
            break;
        }

        const num1 = parseFloat(await getUserInput("Enter the first number: "));
        const num2 = parseFloat(await getUserInput("Enter the second number: "));

        let result;

        switch (choice) {
            case '1':
                result = add(num1, num2);
                console.log(`Result: ${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = subtract(num1, num2);
                console.log(`Result: ${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = multiply(num1, num2);
                console.log(`Result: ${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = divide(num1, num2);
                console.log(`Result: ${num1} / ${num2} = ${result}`);
                break;
            default:
                console.log("Invalid option. Please choose a number between 1 and 5.");
                break;
        }
    }
}

main();
