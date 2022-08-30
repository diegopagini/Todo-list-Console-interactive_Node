/** @format */
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

const main = async () => {
	const tasks = new Tasks();
	let response = ''; // Option selected.

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

		await pause();
	} while (response !== '0');
};

main();
