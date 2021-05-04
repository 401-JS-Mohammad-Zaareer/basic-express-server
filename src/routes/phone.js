'use strict';

const express = require('express');
const router = express.Router();

const Phone = require('../models/phone.js');

const phone = new Phone();

// RESTFUL APIs
router.get('/phone', getAllPhones);
router.get('/phone/:id', getPhone);
router.post('/phone', addPhone);
router.put('/phone/:id', updatePhone);
router.delete('/phone/:id', destroyPhone);

// handlers
function getAllPhones(req, res) {
    const phones = phone.read();
    res.status(200).json(phones);
}

function getPhone(req, res) {
    const phoneId = parseInt(req.params.id);
    const phoneObj = phone.read(phoneId);
    res.status(200).json(phoneObj);
}

function addPhone(req, res) {
    const object = req.body;
    const newPhone = phone.create(object);
    res.status(200).json(newPhone);
}

function updatePhone(req, res) {
    const phoneId = req.params.id;
    const object = req.body;
    const updatedPhone = phone.update(phoneId, object);
    res.status(200).json(updatedPhone)
}

function destroyPhone(req, res) {
    const phoneId = req.params.id;
    const isDestroyed = phone.destroy(phoneId);
    const statusCode = isDestroyed ? 202 : 204;
    const msg = isDestroyed ? 'Item has been destroyed!' : 'Item not found!';
    res.status(statusCode).json({
        msg: msg,
        isDestroyed: isDestroyed
    })
}

module.exports = router;