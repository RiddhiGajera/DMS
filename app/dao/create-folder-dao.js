const { folderSchema } = require('../models/folder-model');
const { messages: { FOLDER_EXIST, DB_ERROR }} = require('../shared/constant');

module.exports.createFolderDao = async (folderData) => {
    try {
        const folder = new folderSchema(folderData);
        await folder.save();
        return { status: true };
    } catch(error) {
        if(error.code === 11000) {
            return { status: false, message: FOLDER_EXIST };
        }
        return { status: false, message: DB_ERROR };
    }
}