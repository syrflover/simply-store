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
const F = require("nodekell");
const fs_1 = require("./lib/fs");
exports.readFile = fs_1.readFile;
exports.writeFile = fs_1.writeFile;
exports.pathExists = fs_1.pathExists;
const json_1 = require("./lib/json");
const initialize = (filePath) => () => __awaiter(this, void 0, void 0, function* () {
    if (!(yield fs_1.pathExists(filePath))) {
        yield write(filePath, {});
    }
});
const read = (filePath) => () => __awaiter(this, void 0, void 0, function* () {
    const data = yield fs_1.readFile(filePath, 'utf8');
    const res = yield json_1.parseJSON(data);
    return res;
});
const write = F.curry((filePath, data) => __awaiter(this, void 0, void 0, function* () {
    const stringified = yield json_1.stringifyJSON(data);
    const res = fs_1.writeFile(filePath, stringified, 'utf8');
    return res;
}));
exports.createStore = (filePath) => ({
    initialize: initialize(filePath),
    read: read(filePath),
    write: write(filePath),
});
//# sourceMappingURL=index.js.map