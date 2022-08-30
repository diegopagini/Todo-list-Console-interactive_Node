/** @format */
import { v4 as uuidv4 } from 'uuid';

export class Task {
	id = '';
	description = '';
	completedIn = null;

	constructor(desc) {
		this.id = uuidv4();
		this.description = desc;
		this.completedIn = null;
	}
}
