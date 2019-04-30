import * as path from 'path';
import { readFile, writeFile, pathExists, mkdirp } from './lib/fs';
import { stringifyJSON, parseJSON } from './lib/json';

export { readFile, writeFile, pathExists };

const initialize = (filePath: string) => async () => {
	if (!(await pathExists(filePath))) {
		await mkdirp(path.dirname(filePath));
		await write(filePath)({});
	}
};

const read = <T = any>(filePath: string) => async (): Promise<T> => {
	const data = await readFile(filePath, 'utf8');

	const res = await parseJSON<T>(data);

	return res;
};

const write = <T = any>(filePath: string) => async (
	data: T,
): Promise<boolean> => {
	const stringified = await stringifyJSON(data);

	const res = writeFile(filePath, stringified, 'utf8');

	return res;
};

export const createStore = <T = any>(filePath: string) => {
	const rp = path.resolve(filePath);
	return {
		initialize: initialize(rp),
		read: read<T>(rp),
		write: write<T>(rp),
	};
};
