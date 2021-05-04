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

    it('handles bad methods', async() => {
        let response1 = await serverRequest.post('/');
        let response2 = await serverRequest.put('/');
        let response3 = await serverRequest.delete('/');
        expect(response1.status).toEqual(404);
        expect(response2.status).toEqual(404);
        expect(response3.status).toEqual(404);
    });

});