"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = (s) => new Promise((resolve, reject) => {
    try {
        const a = JSON.parse(s);
        resolve(a);
    }
    catch (e) {
        reject(e);
    }
});
exports.stringifyJSON = (s) => new Promise((resolve, reject) => {
    try {
        const a = JSON.stringify(s);
        resolve(a);
    }
    catch (e) {
        reject(e);
    }
});
//# sourceMappingURL=json.js.map