const { checkSchema } = require('express-validator');

const { validationCheck } = require('./validations/dms-validation');
const { validationSchema: { createFolderSchema }} = require('./validations/dms-validation-schema');
const { response, created } = require('../app/shared/common-response');
const { getAllDocuments, createFolder, checkFolderExist } = require('./services');

module.exports = (app) => {
    app.get('/dms/documents', getAllDocuments, response);
    app.post('/dms/folder', checkSchema(createFolderSchema), validationCheck, checkFolderExist, createFolder, created);
    
}
