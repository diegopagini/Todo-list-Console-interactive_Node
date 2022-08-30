/** @format */
import { readDB, saveDB } from './helpers/db.js';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

const main = async () => {
	const tasks = new Tasks();
	let response = ''; // Option selected.
	const dbTasks = readDB();

	if (dbTasks) tasks.loadTasks(dbTasks);

	await pause();

	do {
		// Show menu.
		response = await inquirerMenu();

		switch (response) {
			case '1':
				const description = await readInput('Descripción: ');
				tasks.createTask(description);
				break;

			case '2':
				console.log(tasks.tasksList);
				break;
		}

		saveDB(JSON.stringify(tasks.tasksList)); // To create and save our tasks in a local file.

		await pause();
	} while (response !== '0');
};

main();
