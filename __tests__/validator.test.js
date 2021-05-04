'use strict';

const server = require('../src/server.js');
const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Testing Server', () => {
    it('handles no name in query', async() => {
        let response = await serverRequest.get('/person');
        expect(response.status).toEqual(500);
    });

    it('handles json returned object', async() => {
        let response = await serverRequest.get('/person?name=Ahmed');
        expect(response.body.name).toEqual('Ahmed');
    });
    it('handles name in query', async() => {
        let response = await serverRequest.get('/person?name=Ahmed');
        expect(response.status).toEqual(200);
    });

});