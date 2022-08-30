/** @format */
import fs from 'fs';

const file = './db/data.json';

export const saveDB = (data) => {
	fs.writeFileSync(file, data);
};

export const readDB = () => {
	if (!fs.existsSync(file)) return null; // If the file dosn't exist...

	return JSON.parse(fs.readFileSync(file, { encoding: 'utf-8' })); // To return the data in our local file.
};
