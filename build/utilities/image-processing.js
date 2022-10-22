"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = function (req, res) {
    const imageName = req.query.fullname;
    const imageWidth = req.query.width * 1;
    const imageHeight = req.query.height * 1;
    function displayImage() {
        const displayImage = path_1.default.resolve(`./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`);
        res.sendFile(displayImage);
    }
    if (fs_1.default.existsSync(`./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`)) {
        displayImage();
    }
    else if (!fs_1.default.existsSync(`./assets/full/${imageName}.jpg`)) {
        res.send("There's no image with that name in the full folder");
    }
    else if (!imageName || !imageWidth || !imageHeight) {
        res.send('One or more of image inputs is undefined. \n Make sure to put width and height as numbers');
    }
    else {
        try {
            const resizing = async function () {
                await (0, sharp_1.default)(`./assets/full/${imageName}.jpg`)
                    .resize(imageWidth, imageHeight)
                    .toFile(`./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`);
                displayImage();
            };
            resizing();
        }
        catch (error) {
            res.send(error);
        }
    }
};
exports.default = resizeImage;
