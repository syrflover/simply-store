import { readFile, writeFile, pathExists } from './lib/fs';
export { readFile, writeFile, pathExists };
export declare const createStore: <T = any>(filePath: string) => {
    initialize: () => Promise<void>;
    read: () => Promise<T>;
    write: (data: T) => Promise<boolean>;
};
