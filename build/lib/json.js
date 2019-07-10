"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = (s, reviver) => new Promise((resolve, reject) => {
    try {
        const a = JSON.parse(s);
        resolve(a);
    }
    catch (e) {
        reject(e);
    }
});
exports.stringifyJSON = (s, replacer, space) => new Promise((resolve, reject) => {
    try {
        const a = JSON.stringify(s, replacer, space);
        resolve(a);
    }
    catch (e) {
        reject(e);
    }
});
//# sourceMappingURL=json.js.map