import * as F from 'nodekell';
import { readFile, writeFile, pathExists } from './lib/fs';
import { stringifyJSON, parseJSON } from './lib/json';

export { readFile, writeFile, pathExists };

const initialize = (filePath: string) => async () => {
	if (!(await pathExists(filePath))) {
		await write(filePath, {});
	}
};

const read = <T = any>(filePath: string) => async (): Promise<T> => {
	const data = await readFile(filePath, 'utf8');

	const res = await parseJSON<T>(data);

	return res;
};

const write = F.curry(
	async (filePath: string, data: any): Promise<boolean> => {
		const stringified = await stringifyJSON(data);

		const res = writeFile(filePath, stringified, 'utf8');

		return res;
	},
);

export const createStore = <T = any>(filePath: string) => ({
	initialize: initialize(filePath),
	read: read<T>(filePath),
	write: write(filePath),
});
