import * as fs from 'fs';
import { assert } from 'chai';
import { readFile, writeFile } from '../src';

describe('readFile', async () => {
	before('generate file', async () => {
		const a = JSON.stringify({ test: 'test' });
		await writeFile('./test/readtest0.json', a, 'utf8');
	});

	it('read file', async () => {
		const res = await readFile('./test/readtest0.json', 'utf8');

		assert.deepStrictEqual(JSON.parse(res), { test: 'test' });
	});

	after('end test, remove test file', async () => {
		await fs.promises.unlink('./test/readtest0.json');
	});
});
