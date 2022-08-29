/** @format */

require('colors');

const showMenu = () => {
	return new Promise((resolve, reject) => {
		console.clear();
		console.log('=========================='.green);
		console.log('  Seleccione una opción:'.yellow);
		console.log('==========================\n'.green);

		console.log(`${'1.'.green} Crear tarea`);
		console.log(`${'2.'.green} Listar tareas`);
		console.log(`${'3.'.green} Listar tareas completadas`);
		console.log(`${'4.'.green} Listar tareas pendientes`);
		console.log(`${'5.'.green} Completar tarea(s)`);
		console.log(`${'6.'.green} Borrar tarea`);
		console.log(`${'0.'.green} Salir\n`);

		const readline = require('readline').createInterface({
			input: process.stdin, // To stop application and wait for the input.
			output: process.stdout, // Message to show to the user.
		}); // Package from node to read inputs from the console.

		readline.question('Selecciones una opción: ', (response) => {
			readline.close(); // We must close the question after getting the answer.
			resolve(response);
		});
	});
};

const pause = () => {
	return new Promise((resolve, reject) => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(`\nPresione ${'ENTER'.yellow} para continuar `, () => {
			readline.close();
			resolve();
		});
	});
};

module.exports = {
	showMenu,
	pause,
};
