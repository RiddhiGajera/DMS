const { fileSchema } = require('../models/file-model');

module.exports.checkFileExistDao = async (folderData) => {
    try {
        const { name, user_id, folder_id } = folderData;
        const file = await fileSchema.find( { name, user_id, folder_id});
        return file.length > 0 ? true : false;
    }catch(error) {
        return false;
    }
}