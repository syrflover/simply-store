import { readFile, writeFile, pathExists } from './lib/fs';
export { readFile, writeFile, pathExists };
export declare const createStore: <T extends object = any>(filePath: string) => {
    /**
     * if not exists store file, initialize store with init value
     *
     * @param {object} [init={}] - some json
     */
    initialize: (init?: T | undefined) => Promise<void>;
    read: () => Promise<T>;
    write: (data: T) => Promise<boolean>;
};
