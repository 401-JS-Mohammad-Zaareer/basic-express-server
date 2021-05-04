'use strict';

module.exports = (req, res, next) => {
    res.status(404).json({
        mesage: '404 not found page!',
        route: req.baseUrl
    });
}