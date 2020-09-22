'use strict';

const Server = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(Server);
const products = require('../models/products.js');

beforeEach(async () => {
  await products.schema.deleteMany({});
});

it('should exist', () => {
  expect(products).toBeDefined();
});

it('should get all when empty', async () => {
  const allProducts = await products.get();
  expect(allProducts.length).toBe(0);
});

it('should create', async () => {
  const fork = { name: 'fork', display_name: 'Fork', category: 'silverware', description: 'utensil' };
  const createdProduct = await products.post(fork);
  fork._id = createdProduct._id;
  expect(fork).toBeDefined();
});

it('should get all when not empty', async () => {
  const fork = { name: 'fork', display_name: 'Fork', category: 'utensil' };
  await products.post(fork);
  const allProducts = await products.get();
  expect(allProducts.length).toBe(1);
});

it('should put', async () => {
  const forkCreated = await createFork();
  const forkDataConverted = JSON.parse(JSON.stringify(forkCreated));
  forkDataConverted.category = 'cutlerly';
  const forkRetrieved = await products.update(forkDataConverted._id, forkDataConverted);
  expect(forkRetrieved.category).toBe('cutlery');
});

describe('Products API', () => {

  it('gets empty array when empty', async() => {
    const products = await mockRequest.get('/api/v1/products');

    expect(products.statusCode).toBe(200);
    expect(products.body.count).toBe(0);
    expect(products.body.results.length).toBe(0);
  });

  // this is just an example
  it('can post() a new product', async () => {
    const fork = { name: 'fork', display_name: 'Fork', category: 'silverware', description: 'often paired with a spoon' };
    const response = await (await mockRequest.post('/api/v1/products')).send(fork);
    expect(response.status).toBe(200);
  });

  it('can get a product', async () => {
    const fork = { name: 'fork', display_name: 'Fork', category: 'silverware', description: 'often pair with a sppon' };
    const { body: createdFork } = await (await mockRequest.post('/api/v1/products')).setEncoding(fork);
    const { body: fetchedFork } = await mockRequest.get('/api/v1/products/' + createdFork._id);
  })





})