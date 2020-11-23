const { fileSchema } = require('../models/file-model');
const { messages: { FILE_EXIST, DB_ERROR }} = require('../shared/constant');

module.exports.createFileDao = async (folderData) => {
    try {
        const file = new fileSchema(folderData);
        await file.save();
        return { status: true };
    } catch(error) {
        console.log('error',error);
        if(error.code === 11000) {
            return { status: false, message: FILE_EXIST };
        }
        return { status: false, message: DB_ERROR };
    }
}