const { validationResult } = require('express-validator/check');

const { badRequest } = require('../shared/common-response');

module.exports.validationCheck = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            badRequest(req, res, errors);
            return;
        }     
    }catch(error) {
        next(error);
    }
    next();
}