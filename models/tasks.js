/** @format */
import 'colors';

import { Task } from './task.js';

export class Tasks {
	_list = {};

	constructor() {
		this._list = {};
	}

	get tasksList() {
		return Object.keys(this._list).map((key) => this._list[key]);
	}

	createTask(description = '') {
		const task = new Task(description);
		this._list[task.id] = task; // Sometimes is better to use an object instead an array
	}

	loadTasks(tasks = []) {
		tasks.forEach((task) => (this._list[task.id] = task));
	}

	showAllTasks() {
		console.clear();
		console.log('\n'); // To create a empty space.

		Object.keys(this._list).forEach((key, index) => {
			// One way to create the list without using our tasksList.
			console.log(
				`${(index + 1 + '.').yellow} ${this._list[key].description} : ${
					this._list[key].completedIn ? 'Completado'.green : 'Pendiente'.red
				} `
			);
		});
	}

	showTasksByStatus(completed = true) {
		console.clear();
		console.log('\n'); // To create a empty space.
		let counter = 0;

		this.tasksList.forEach((task) => {
			const { description, completedIn } = task;
			const status = completedIn ? 'Completada'.green : 'Pendiente'.red;

			if (completed) {
				// To show completed tasks.
				if (completedIn) {
					counter += 1;
					console.log(`${(counter + '.').yellow} ${description} : ${completedIn.green}`);
				}
			}

			if (!completed) {
				// To show pending tasks.
				if (!completedIn) {
					counter += 1;
					console.log(`${(counter + '.').yellow} ${description} : ${status}`);
				}
			}
		});
	}

	deleteTask(id = '') {
		if (this._list[id]) delete this._list[id];
	}

	toggleTasks(ids = []) {
		ids.forEach((id) => {
			const task = this._list[id];
			if (!task.completedIn) task.completedIn = new Date().toISOString();
		});

		this.tasksList.forEach((task) => {
			if (!ids.includes(task.id)) this._list[task.id].completedIn = null;
		});
	}
}
