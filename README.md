# simply-store

[![Build Status](https://travis-ci.org/syrflover/simply-store.png?branch=master)](https://travis-ci.org/syrflover/simply-store)

I made it for myself.

## Installation

```sh
npm install syrflover/simply-store
```

## Usage

```ts
import { createStore } from 'simply-store';

const store = createStore('./store.json');
// or use generic
const store = createStore<SomeObjectType>('./store.json');

store
    .initialize()
    .then(async () => {
        const read0 = await store.read();
        // {}

        // overwrite the store
        await store.write({ user: [{ id: 1, name: 'syr' }] });

        const read1 = await store.read();
        // { user: [{ id: 1, name: 'syr' }] }

        // overwrite the store
        await store.write({ post: [{ id: 1, content: 'content' }] });

        const read2 = await store.read();
        // { post: [{ id: 1, content: 'content' }] }
    })
    .catch(() => {
        // some error handle
    });
```
