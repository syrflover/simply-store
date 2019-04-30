"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.pathExists = (p) => fs.promises
    .access(p)
    .then(() => true)
    .catch(() => false);
exports.readFile = (p, encoding) => new Promise((resolve, reject) => {
    let res = '';
    const rs = fs.createReadStream(p, encoding);
    rs.on('data', (data) => {
        res += data;
    });
    rs.once('error', (error) => {
        reject(error);
    });
    rs.once('end', () => __awaiter(this, void 0, void 0, function* () {
        resolve(res);
    }));
});
exports.writeFile = (p, data, encoding) => new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(p, { encoding });
    ws.once('error', (error) => {
        reject(error);
    });
    const res = ws.write(data);
    resolve(res);
});
//# sourceMappingURL=fs.js.map