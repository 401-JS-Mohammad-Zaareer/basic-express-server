'use strict';

module.exports = (err, req, res, next) => {
    res.status(500).json({
        err: err,
        message: `somthing goes wronge, ${err.message}`,
        path: req.path
    });
}