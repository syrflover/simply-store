import * as fs from 'fs';
import * as assert from 'assert';
import { readFile, writeFile } from '../src';

describe('readFile', async () => {
	before('generate file', async () => {
		const a = JSON.stringify({ test: 'test' });
		await writeFile('./readtest.json', a, 'utf8');
	});

	it('readFile', async () => {
		const res = await readFile('./readtest.json', 'utf8');

		assert.deepStrictEqual(JSON.parse(res), { test: 'test' });
	});

	after('end test, remove test file', async () => {
		await fs.promises.unlink('./readtest.json');
	});
});
