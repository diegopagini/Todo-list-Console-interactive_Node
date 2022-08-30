/** @format */
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
}
