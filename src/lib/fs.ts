import * as fs from 'fs';
import * as mkdirpcb from 'mkdirp';
import { promisify } from 'util';

export const pathExists = (p: string): Promise<boolean> =>
	fs.promises
		.access(p)
		.then(() => true)
		.catch(() => false);

export const mkdirp = promisify(mkdirpcb);

export const readFile = (p: string, encoding: string): Promise<string> =>
	new Promise((resolve, reject) => {
		let res = '';

		const rs = fs.createReadStream(p, encoding);

		rs.on('data', (data) => {
			res += data;
		});

		rs.once('error', (error) => {
			reject(error);
		});

		rs.once('end', async () => {
			resolve(res);
		});
	});

export const writeFile = (
	p: string,
	data: any,
	encoding: string,
): Promise<boolean> =>
	new Promise((resolve, reject) => {
		const ws = fs.createWriteStream(p, { encoding });

		ws.once('error', (error) => {
			reject(error);
		});

		const res = ws.write(data);

		resolve(res);
	});
