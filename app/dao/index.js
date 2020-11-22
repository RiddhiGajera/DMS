const { getAllDocumentsDao } = require('./get-all-documents-dao');
const { createFolderDao } = require('./create-folder-dao');
const { checkFolderExistDao } = require('./check-folder-exist-dao');

module.exports = {
    getAllDocumentsDao,
    createFolderDao,
    checkFolderExistDao,
}
