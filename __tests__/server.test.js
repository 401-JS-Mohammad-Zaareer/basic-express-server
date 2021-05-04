'use strict';

const server = require('../src/server.js');
const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Testing server module', () => {
    it('handles home page', async() => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
    });

    it('handles not found route', async() => {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });

    it('handles bad method', async() => {
        let response = await serverRequest.post('/');
        expect(response.status).toEqual(404);
    });

});