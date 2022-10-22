import { Request, Response } from 'express';
import fs from 'fs';
import sharp from 'sharp';
import path from 'path';

interface Query {
  fullname: string;
  width: number;
  height: number;
}
const resizeImage = function (
  req: Request<unknown, unknown, unknown, Query>,
  res: Response
): void {
  const imageName = req.query.fullname;
  const imageWidth = req.query.width * 1;
  const imageHeight = req.query.height * 1;

  function displayImage(): void {
    const displayImage = path.resolve(
      `./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`
    );
    res.sendFile(displayImage);
  }

  if (
    fs.existsSync(`./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`)
  ) {
    displayImage();
  } else if (!fs.existsSync(`./assets/full/${imageName}.jpg`)) {
    res.send("There's no image with that name in the full folder");
  } else if (!imageName || !imageWidth || !imageHeight) {
    res.send(
      'One or more of image inputs is undefined. \n Make sure to put width and height as numbers'
    );
  } else {
    try {
      const resizing = async function (): Promise<void> {
        await sharp(`./assets/full/${imageName}.jpg`)
          .resize(imageWidth, imageHeight)
          .toFile(`./assets/thumb/${imageName + imageWidth + imageHeight}.jpg`);

        displayImage();
      };

      resizing();
    } catch (error) {
      res.send(error);
    }
  }
};

export default resizeImage;
