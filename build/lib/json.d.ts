export declare const parseJSON: <T = any>(s: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => Promise<T>;
export declare const stringifyJSON: (s: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined) => Promise<string>;
