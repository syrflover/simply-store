import * as path from 'path';
import { readFile, writeFile, pathExists, mkdirp } from './lib/fs';
import { stringifyJSON, parseJSON } from './lib/json';

export { readFile, writeFile, pathExists, stringifyJSON, parseJSON };

interface IStore<T> {
    initialize: (init?: T) => Promise<void>;
    read: () => Promise<T>;
    write: (data: T) => Promise<boolean>;
}

export type Store<T> = IStore<T>;

const initialize = <T = any>(filePath: string) => async (init?: T) => {
    if (!(await pathExists(filePath))) {
        await mkdirp(path.dirname(filePath));
        await write(filePath)(init || {});
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

export const createStore = <T extends object = any>(
    filePath: string,
): Store<T> => {
    const rp = path.resolve(filePath);
    return {
        /**
         * if not exists store file, initialize store with init value
         *
         * @param {Any} [init={}] - some json
         */
        initialize: initialize<T>(rp),
        read: read<T>(rp),
        write: write<T>(rp),
    };
};
