const { getAllDocumentsDao } = require('./get-all-documents-dao');
const { createFolderDao } = require('./create-folder-dao');
const { checkFolderExistDao } = require('./check-folder-exist-dao');
const { checkFileExistDao } = require('./check-file-exist-dao');
const { createFileDao } = require('./create-file-dao');
const { authenticateUser } = require('./authenticate-user-dao');
const { getUserByName } = require('./get-user-by-name-dao');
const { getAllFilesBasedOnFolderIdDao } = require('./get-all-files-by-folder-id-dao');
const { getFileByIdDao } = require('./get-file-by-id-dao');
const { moveFileDao } = require('./move-file-dao');

module.exports = {
    getAllDocumentsDao,
    createFolderDao,
    checkFolderExistDao,
    checkFileExistDao,
    createFileDao,
    authenticateUser,
    getUserByName,
    getAllFilesBasedOnFolderIdDao,
    getFileByIdDao,
    moveFileDao,
}
