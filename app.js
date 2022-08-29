/** @format */

const { showMenu, pause } = require('./helpers/messages');

require('colors');

const main = async () => {
	let option = '';

	do {
		option = await showMenu();
		console.log({ option });
		await pause();
	} while (option !== '0');
};

main();
