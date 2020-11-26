const { folderSchema } = require('../models/folder-model');

module.exports.checkFolderExistDao = async (folderData) => {
    try {
        const folder = await folderSchema.find(folderData);
        return folder.length > 0 ? true : false;
    }catch(error) {
        return false;
    }
}