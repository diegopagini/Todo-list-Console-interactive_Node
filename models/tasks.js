/** @format */
import { Task } from './task.js';

export class Tasks {
	_list = {};

	constructor() {
		this._list = {};
	}

	get tasksList() {
		const arr = [];
		Object.keys(this._list).forEach((key) => {
			const task = this._list[key];
			arr.push(task);
		});
		return arr;
	}

	createTask(description = '') {
		const task = new Task(description);

		this._list[task.id] = task; // Sometimes is better to use an object instead an array
	}
}
