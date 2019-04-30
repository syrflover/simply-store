import * as fs from 'fs';
import * as assert from 'assert';
import { createStore } from '../src';

describe('createStore', () => {
	let store: ReturnType<typeof createStore>;

	before('create store', () => {
		store = createStore('./storetest.json');
	});

	it('initialize', async () => {
		await store.initialize();

		const res = await fs.promises.readFile('./storetest.json', 'utf8');

		assert.deepStrictEqual(JSON.parse(res), {});
	});

	it('write and read', async () => {
		const res0 = await store.write({ test: 'test' });

		const res1 = await store.read();

		assert.strictEqual(res0, true);
		assert.deepStrictEqual(res1, { test: 'test' });
	});

	after('end test, remove test file', async () => {
		await fs.promises.unlink('./storetest.json');
	});
});
