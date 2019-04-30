import * as fs from 'fs';
import { assert } from 'chai';
import { writeFile } from '../src';

describe('writeFile', () => {
	it('none exists, write file', async () => {
		const a = JSON.stringify({ test: 'test' });
		const res0 = await writeFile('./test/writetest0.json', a, 'utf8');

		assert.strictEqual(res0, true);
	});

	it('exists, write file', async () => {
		const a = JSON.stringify({ test: 'test' });
		const res0 = await writeFile('./test/writetest1.json', a, 'utf8');

		assert.strictEqual(res0, true);
	});

	after('end test, remote test file', async () => {
		await fs.promises.unlink('./test/writetest0.json');
		await fs.promises.unlink('./test/writetest1.json');
	});
});
