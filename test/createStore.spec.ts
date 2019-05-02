import * as fs from 'fs';
import { assert } from 'chai';
import { createStore } from '../src';

describe('createStore', () => {
	let store: ReturnType<typeof createStore>;

	before('create store', () => {
		store = createStore('./test/a/b/c/store/storetest0.json');
	});

	it('initialize', async () => {
		await store.initialize();

		const res = await fs.promises.readFile(
			'./test/a/b/c/store/storetest0.json',
			'utf8',
		);

		assert.deepStrictEqual(JSON.parse(res), {});
	});

	it('write and read', async () => {
		const res0 = await store.write({ test: 'test' });

		const res1 = await store.read();

		assert.strictEqual(res0, true);
		assert.deepStrictEqual(res1, { test: 'test' });
	});

	after('end test, remove test file', async () => {
		await fs.promises.unlink('./test/a/b/c/store/storetest0.json');
		await fs.promises.rmdir('./test/a/b/c/store');
		await fs.promises.rmdir('./test/a/b/c');
		await fs.promises.rmdir('./test/a/b/');
		await fs.promises.rmdir('./test/a/');
	});
});
