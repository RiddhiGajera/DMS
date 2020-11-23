const { checkSchema } = require('express-validator');

const { passport } = require('./auth/passport');
const { login } = require('./auth/login');
const { validationCheck } = require('./validations/dms-validation');
const { validationSchema: { createFolderSchema, createFileSchema, loginValidation }} = require('./validations/dms-validation-schema');
const { response, created } = require('../app/shared/common-response');
const { getAllDocuments, createFolder, checkFolderExist, checkFolderIdExist, checkFileExist, createFile, getAllFilesBasedOnFolderId } = require('./services');

module.exports = (app) => {
    app.post('/dms/login', checkSchema(loginValidation), validationCheck, passport.authenticate('local-login'), login, response);
    app.use(passport.authenticate('jwt'));
    app.get('/dms/documents', getAllDocuments, response);
    app.get('/dms/documents/:folder_id', checkFolderIdExist, getAllFilesBasedOnFolderId, response);
    app.post('/dms/folder', checkSchema(createFolderSchema), validationCheck, checkFolderExist, createFolder, created);
    app.post('/dms/file', checkSchema(createFileSchema), validationCheck, checkFolderIdExist, checkFileExist, createFile, created);
    
}
