import { readFile, writeFile, pathExists } from './lib/fs';
export { readFile, writeFile, pathExists };
export declare const createStore: <T extends object = any>(filePath: string) => {
    initialize: (init?: T | undefined) => Promise<void>;
    read: () => Promise<T>;
    write: (data: T) => Promise<boolean>;
};
