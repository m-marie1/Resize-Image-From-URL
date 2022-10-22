"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
// Endpoint test
describe('Test endpoint responses', function () {
    it('gets the api endpoint', function (done) {
        (0, supertest_1.default)(index_1.default).get('/api/image').expect(200);
        done();
    });
});
// Sharp test
const sharpFunc = async function () {
    await (0, sharp_1.default)(`./assets/full/1.jpg`)
        .resize(1000, 1000)
        .toFile(`./assets/thumb/110001000.jpg`);
    const checkImage = path_1.default.resolve('./assets/thumb/110001000.jpg');
    return checkImage;
};
it('expexts resize to resolve', async () => {
    const result = await sharpFunc();
    expect(result).toEqual(path_1.default.resolve('./assets/thumb/110001000.jpg'));
});
