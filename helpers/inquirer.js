/** @format */
import 'colors';

import inquirer from 'inquirer';

const questions = [
	// questions to show through inquirer.
	{
		type: 'list',
		name: 'opcion',
		message: '¿Qué desea hacer?',
		choices: [
			'Crear tarea',
			'Listar tareas',
			'Listar tareas completadas',
			'Listar tareas pendientes',
			'Completar tarea(s)',
			'Eliminar tarea(s)',
			'Salir',
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('==========================='.green);
	console.log('   Seleccione una opción'.yellow);
	console.log('===========================\n'.green);

	return await inquirer.prompt(questions);
};

export { inquirerMenu };
