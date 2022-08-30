/** @format */
import { Task } from './task.js';


export class Tasks {
	_list = {};

	constructor() {
		this._list = {};
	}

	createTask(description = '') {
		const task = new Task(description);

		this._list[task.id] = task; // Sometimes is better to use an object instead an array
	}
}
