/** @format */
import { readDB, saveDB } from './helpers/db.js';
import { checkList, confirm, inquirerMenu, pause, readInput, tasksToDelete } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

const main = async () => {
	const tasks = new Tasks(); // Virtual tasks.
	let response = ''; // Option selected.
	const dbTasks = readDB(); // Our tasks from local machine.

	if (dbTasks) tasks.loadTasks(dbTasks); // If we have tasks in local, they are loaded into our virtual tasks.

	do {
		// Show menu.
		response = await inquirerMenu();

		switch (response) {
			case '1': // Create a task.
				const description = await readInput('Descripción: ');
				tasks.createTask(description);
				break;

			case '2': // Show all tasks.
				tasks.showAllTasks();
				break;

			case '3': // Show completed tasks.
				tasks.showTasksByStatus(true);
				break;

			case '4': // Show pending tasks.
				tasks.showTasksByStatus(false);
				break;

			case '5': // Copleted or Pending
				const ids = await checkList(tasks.tasksList);
				console.log(ids);
				break;

			case '6': // Delete a task.
				const id = await tasksToDelete(tasks.tasksList); // Get task to delete.

				if (id !== '0') {
					const ok = await confirm('¿Estás seguro?'); // Ask to confirm.
					if (ok) {
						tasks.deleteTask(id);
						console.log('\n   Tarea borrada'.red);
					}
				}
				break;
		}

		saveDB(JSON.stringify(tasks.tasksList)); // To create and save our tasks in a local file.

		await pause(); // Another menu so we can wait the previous option.
	} while (response !== '0');
};

main();
