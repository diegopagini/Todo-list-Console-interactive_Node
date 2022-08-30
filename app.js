/** @format */
import { inquirerMenu, pause } from './helpers/inquirer.js';

const main = async () => {
	let response = '';

	do {
		response = await inquirerMenu();
		console.log({ response });
		await pause();
	} while (response !== '0');
};

main();
