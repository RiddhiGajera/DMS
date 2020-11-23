const { getAllDocuments } = require('./get-all-documents');
const { createFolder } = require('./create-folder');
const { checkFolderExist } = require('./check-folder-exist');
const { checkFileExist } = require('./check-file-exist');
const { createFile } = require('./create-file');
const { checkFolderIdExist } = require('./check-folder-exist-by-folder-id');
const { getAllFilesBasedOnFolderId } = require('./get-files-by-folder-id');

module.exports = {
    getAllDocuments,
    createFolder,
    checkFolderExist,
    checkFolderIdExist,
    checkFileExist,
    createFile,
    getAllFilesBasedOnFolderId,
}