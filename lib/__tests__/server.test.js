'use strict';

require('@code-fellows/supergoose');
const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 500 on an error', () => {

    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/food', () => {

    return mockRequest
      .get('/api/v1/food')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

});

// example test
describe ('Food API', () => {
  it('can post() a new food', async () => {
    let apples = { name: 'apples', calories: 100, type: 'FRUIT' };
    const {body } = await (await mockRequest.post('./api/v1/food')).send(apples);


    Object.keys(apples).forEach(key => {
      expect(body[key]).toEqual(apples[key]);
    });
  })
})
