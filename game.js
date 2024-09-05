const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [3, 5, 3, 8, 2, 3, 9, 3, 4];
let isRunning = true;

function showMenu() {
    console.log(`
    Menu:
    1. Choose a number and count its occurrences
    2. Exit
    `);
}

function getUserInput(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    while (isRunning) {
        showMenu();

        const choice = await getUserInput("Choose an option: ");

        switch (choice) {
            case '1':
                console.log("The list of numbers is: " + numbers.join(", "));
                
                const numberToCount = parseInt(await getUserInput("Choose a number from the list: "), 10);
                let count = 0;

                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === numberToCount) {
                        count++;
                    }
                }

                console.log(`The number ${numberToCount} appears ${count} times in the list.`);
                break;

            case '2':
                console.log("Exiting program...");
                isRunning = false;
                rl.close();
                break;

            default:
                console.log("Invalid option. Please choose a valid option.");
        }
    }
}

main();
