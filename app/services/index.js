const { getAllDocuments } = require('./get-all-documents');
const { createFolder } = require('./create-folder');
const { checkFolderExist } = require('./check-folder-exist');

module.exports = {
    getAllDocuments,
    createFolder,
    checkFolderExist,
}