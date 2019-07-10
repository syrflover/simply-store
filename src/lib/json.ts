export const parseJSON = <T = any>(
    s: string,
    reviver?: ((this: any, key: string, value: any) => any) | undefined,
): Promise<T> =>
    new Promise((resolve, reject) => {
        try {
            const a = JSON.parse(s);
            resolve(a);
        } catch (e) {
            reject(e);
        }
    });

export const stringifyJSON = (
    s: any,
    replacer?: ((this: any, key: string, value: any) => any) | undefined,
    space?: string | number | undefined,
): Promise<string> =>
    new Promise((resolve, reject) => {
        try {
            const a = JSON.stringify(s, replacer, space);
            resolve(a);
        } catch (e) {
            reject(e);
        }
    });
