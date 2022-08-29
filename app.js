/** @format */
import { inquirerMenu } from './helpers/inquirer.js';

const main = async () => {
	let opt = '';

	do {
		opt = await inquirerMenu();
		console.log({ opt });
	} while (opt !== '');
};

main();
