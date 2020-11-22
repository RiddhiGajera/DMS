const { checkSchema } = require('express-validator');

const { validationCheck } = require('./validations/dms-validation');
const { validationSchema: { createFolderSchema, createFileSchema }} = require('./validations/dms-validation-schema');
const { response, created } = require('../app/shared/common-response');
const { getAllDocuments, createFolder, checkFolderExist, checkFolderIdExist, checkFileExist, createFile } = require('./services');

module.exports = (app) => {
    app.get('/dms/documents', getAllDocuments, response);
    app.post('/dms/folder', checkSchema(createFolderSchema), validationCheck, checkFolderExist, createFolder, created);
    app.post('/dms/file', checkSchema(createFileSchema), validationCheck, checkFolderIdExist, checkFileExist, createFile, created);
    
}
