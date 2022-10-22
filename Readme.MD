# Project Name: Image Processing API

## Project Description:

    A back-end web application using Node, Express, TypeScript, testing with Jasmine, and using sharp to resize an image.

## How it works:

    By putting the image in assets/full folder and using URL parameters to enter the name of the image, height and width of the resized image, then the resized image gets saved in the thumb folder and sent to the user.

# Notes:

    1. Original images are in images folder, and the same images are in assets/full duplicated with names from 1 to 5 for ease of use.

    2. An example of URL: "http://localhost:3000/api/images?fullname=2&width=900&height=900".

    3. Used req.query.width * 1 & req.query.height * 1 to convert them into numbers because parseInt caused errors with TypeScript.

    4. Used path.resolve and res.sendFile to send the resized image to the user (in References).

    5. In routes folder, I used Interface and (req: Request<unknown, unknown, unknown, Query>, res: Response) to solve errors with TypeScript (in References).

    6. 2 Unit tests for the endpoint and sharp image processing in 1 file indexSpec.ts. I tested sharp directly in indexSpec and the test passes and the image with the given data (name:1 width:1000 height:1000) gets saved in thumb folder.

    7. An error message gets displayed in case there's no image in "full" folder with the name entered or width and height are not numbers.

    8. Before submitting tested running these and everything worked:

        npm run prettier, npm run lint, npm run test, npm run build && node build/. (or npm run start1) , npm run start (for nodemon).


# References:

    1. Types for fullname, width and height

            https://stackoverflow.com/questions/63538665/how-to-type-request-query-in-express-using-typescript

    2. Caching using existsSinc

            https://attacomsian.com/blog/nodejs-check-if-directory-exists

    3. For using sharp and async await with sharp

            Documentation: https://www.npmjs.com/package/sharp
            Guide on using sharp: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp


    4. Jasmine endpoint testing with supertest using async await: used supertest documentation (as with mocha instead of Jasmine(not in the docs))
          
           https://www.npmjs.com/package/supertest





