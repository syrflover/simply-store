import { readFile, writeFile, pathExists } from './lib/fs';
import { stringifyJSON, parseJSON } from './lib/json';
export { readFile, writeFile, pathExists, stringifyJSON, parseJSON };
interface IStore<T> {
    initialize: (init?: T) => void;
    read: () => Promise<T>;
    write: (data: T) => Promise<boolean>;
}
export declare type Store<T> = IStore<T>;
export declare const createStore: <T extends object = any>(filePath: string) => IStore<T>;
