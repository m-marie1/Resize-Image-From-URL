"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_processing_1 = __importDefault(require("../utilities/image-processing"));
const routes = express_1.default.Router();
routes.get('/', image_processing_1.default);
exports.default = routes;
