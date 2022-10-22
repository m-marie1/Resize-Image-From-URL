import express from 'express';
import resizeImage from '../utilities/image-processing';

const routes = express.Router();

routes.get('/', resizeImage);

export default routes;
