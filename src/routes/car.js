'use strict';

let express = require('express');
let router = express.Router();

let Car = require('../models/car.js');

let car = new Car();

// RESTFUL APIs
router.get('/car', getAllCars);
router.get('/car/:id', getCar);
router.post('/car', addCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', destroyCar);

// handlers
function getAllCars(req, res) {
    let cars = car.read();
    res.status(200).json(cars);
}

function getCar(req, res) {
    let carId = parseInt(req.params.id);
    let carObj = car.read(carId);
    res.status(200).json(carObj);
}

function addCar(req, res) {
    let object = req.body;
    let newCar = car.create(object);
    res.status(200).json(newCar);
}

function updateCar(req, res) {
    let carId = req.params.id;
    let object = req.body;
    let updatedCar = car.update(carId, object);
    res.status(200).json(updatedCar)
}

function destroyCar(req, res) {
    let carId = req.params.id;
    let isDestroyed = car.destroy(carId);
    let statusCode = isDestroyed ? 202 : 204;
    let msg = isDestroyed ? 'Item has been destroyed!' : 'Item not found!';
    res.status(statusCode).json({
        msg: msg,
        isDestroyed: isDestroyed
    });
}

module.exports = router;