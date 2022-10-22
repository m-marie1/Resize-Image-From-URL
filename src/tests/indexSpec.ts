import request from 'supertest';
import app from '../index';
import sharp from 'sharp';
import path from 'path';

// Endpoint test
describe('Test endpoint responses', function (): void {
  it('gets the api endpoint', function (done): void {
    request(app).get('/api/image').expect(200);
    done();
  });
  
});

// Sharp test
const sharpFunc = async function (): Promise<string> {
  await sharp(`./assets/full/1.jpg`)
    .resize(1000, 1000)
    .toFile(`./assets/thumb/110001000.jpg`);
  const checkImage = path.resolve('./assets/thumb/110001000.jpg');
  return checkImage;
};

it('expexts resize to resolve', async (): Promise<void> => {
  const result = await sharpFunc();
  expect(result).toEqual(path.resolve('./assets/thumb/110001000.jpg'));
});
