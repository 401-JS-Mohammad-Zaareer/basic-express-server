'use strict';

let server = require('../src/server.js');
let superTest = require('supertest');
let serverRequest = superTest(server.app);

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

describe('Testing Server Car API', () => {

    // test post 
    it('be able to POST a new car', async() => {
        let response = await serverRequest.post('/car').send({
            make: 'BMW',
            model: 'i8',
            color: 'whit'
        });
        expect(response.status).toEqual(200);
        expect(response.body.make).toEqual('BMW');
        expect(response.body.model).toEqual('i8');
        expect(response.body.color).toEqual('whit');
    });

    // test reading all cars
    it('handles json returned all car objects', async() => {
        let response = await serverRequest.get('/car');
        expect(response.status).toEqual(200);
    });

    // test reading specific car
    it('handles json returned specific car object', async() => {
        let response = await serverRequest.get('/car/2');
        expect(response.status).toEqual(200);
        expect(response.body.make).toEqual('Opel');
        expect(response.body.model).toEqual('Vectra');
        expect(response.body.color).toEqual('black');
    });

    // test updating a car
    it('be able to update a car object', async() => {
        let response = await serverRequest.put('/car/1');
        expect(response.status).toEqual(200);
    });

    // test destroying a non-exists car
    it('unable to destroy a non-exist car object', async() => {
        let response = await serverRequest.delete('/car/300');
        expect(response.status).toEqual(204);
    });
    // // test destroying a exists car
    it('be able to destroy a car object', async() => {
        let response = await serverRequest.delete('/car/3');
        expect(response.status).toEqual(202);
        expect(response.body.msg).toEqual('Item has been destroyed!');
        expect(response.body.isDestroyed).toEqual(true);
    });

});

describe('Testing Server Phone API', () => {
    it('be able to POST a new phone', async() => {
        let response = await serverRequest.post('/phone').send({
            make: 'Samsung',
            ram: '8GB',
            camera: '45MP'
        });
        expect(response.status).toEqual(200);
        expect(response.body.make).toEqual('Samsung');
        expect(response.body.ram).toEqual('8GB');
        expect(response.body.camera).toEqual('45MP');
    });

    // test reading all phones
    it('handles json returned all phone objects', async() => {
        let response = await serverRequest.get('/phone');
        expect(response.status).toEqual(200);
    });

    // test reading specific phone
    it('handles json returned specific phone object', async() => {
        let response = await serverRequest.get('/phone/2');
        expect(response.status).toEqual(200);
        expect(response.body.make).toEqual('Apple');
        expect(response.body.ram).toEqual('8GB');
        expect(response.body.camera).toEqual('32MP');
    });

    // test updating a phone
    it('be able to update a car object', async() => {
        let response = await serverRequest.put('/phone/1');
        expect(response.status).toEqual(200);
    });

    // test destroying a non-exists phone
    it('unable to destroy a non-exist phone object', async() => {
        let response = await serverRequest.delete('/phone/300');
        expect(response.status).toEqual(204);
    });

    // test destroying a exists phone
    it('be able to destroy a phone object', async() => {
        let response = await serverRequest.delete('/phone/3');
        expect(response.status).toEqual(202);
        expect(response.body.msg).toEqual('Item has been destroyed!');
        expect(response.body.isDestroyed).toEqual(true);
    });
});