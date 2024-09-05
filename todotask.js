let tasks = [];
let isRunning = true;

while (isRunning) {
    // Display the menu
    console.log(`
    Menu:
    1. Add a Task
    2. View All Tasks
    3. Delete a Task
    4. Exit
    `);

    // Prompt user to choose an option
    let choice = prompt("Choose an option: ");

    switch (choice) {
        case '1':
            // Add a Task
            let newTask = prompt("Enter the task: ");
            tasks.push(newTask);
            console.log(`Task added: ${newTask}`);
            break;

        case '2':
            // View All Tasks
            if (tasks.length === 0) {
                console.log("No tasks to show.");
            } else {
                console.log("Tasks:");
                for (let i = 0; i < tasks.length; i++) {
                    console.log(`${i + 1}. ${tasks[i]}`);
                }
            }
            break;

        case '3':
            // Delete a Task
            if (tasks.length === 0) {
                console.log("No tasks to delete.");
            } else {
                let taskNumber = prompt("Enter the task number to delete: ");
                let index = parseInt(taskNumber) - 1;

                if (index >= 0 && index < tasks.length) {
                    let removedTask = tasks.splice(index, 1);
                    console.log(`Task deleted: ${removedTask}`);
                } else {
                    console.log("Invalid task number.");
                }
            }
            break;

        case '4':
            // Exit
            console.log("Exiting program...");
            isRunning = false;
            break;

        default:
            console.log("Invalid option. Please choose a valid option.");
    }
}
