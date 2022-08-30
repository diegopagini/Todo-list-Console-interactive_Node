/** @format */
import 'colors';

import inquirer from 'inquirer';

// Using "type": "module" in package.json now we can use import from instead of require()

const questions = [
	// questions to show through inquirer.
	{
		type: 'list',
		name: 'option',
		message: '¿Qué desea hacer?',
		choices: [
			{
				value: '1',
				name: '1. Crear tarea',
			},
			{
				value: '2',
				name: '2. Listar tareas',
			},
			{
				value: '3',
				name: '3. Listar tareas completadas',
			},
			{
				value: '4',
				name: '4. Listar tareas pendientes',
			},
			{
				value: '5',
				name: '5. Completar tarea(s)',
			},
			{
				value: '6',
				name: '6. Eliminar tarea(s)',
			},
			{
				value: '0',
				name: '0. Salir',
			},
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('==========================='.green);
	console.log('   Seleccione una opción'.yellow);
	console.log('===========================\n'.green);

	const { option } = await inquirer.prompt(questions);
	return option;
};

const pause = async () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `Presione ${'ENTER'.green} para continuar`,
		},
	];
	console.log('\n');
	await inquirer.prompt(question);
};

export { inquirerMenu, pause };
