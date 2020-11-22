const { folderSchema } = require('../models/folder-model');

module.exports.checkFolderExistDao = async (folderData) => {
    try {
        const { name, user_id } = folderData;
        const folder = await folderSchema.find( { name, user_id});
        return folder.length > 0 ? true : false;
    }catch(error) {
        return false;
    }
}