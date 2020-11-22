const { getAllDocumentsDao } = require('./get-all-documents-dao');
const { createFolderDao } = require('./create-folder-dao');
const { checkFolderExistDao } = require('./check-folder-exist-dao');
const { checkFileExistDao } = require('./check-file-exist-dao');
const { createFileDao } = require('./create-file-dao');

module.exports = {
    getAllDocumentsDao,
    createFolderDao,
    checkFolderExistDao,
    checkFileExistDao,
    createFileDao,
}
