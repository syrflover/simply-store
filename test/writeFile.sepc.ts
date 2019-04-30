import * as fs from 'fs';
import * as assert from 'assert';
import { writeFile } from '../src';

describe('writeFile', () => {
	it('none exists, write file', async () => {
		const a = JSON.stringify({ test: 'test' });
		const res = await writeFile('./writetest.json', a, 'utf8');

		assert.strictEqual(res, true);
	});

	it('exists, write file', async () => {
		const a = JSON.stringify({ test: 'test' });
		const res = await writeFile('./writetest.json', a, 'utf8');

		assert.strictEqual(res, true);
	});

	after('end test, remote test file', async () => {
		await fs.promises.unlink('./writetest.json');
	});
});
