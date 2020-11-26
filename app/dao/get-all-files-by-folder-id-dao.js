const { fileSchema } = require('../models/file-model');

module.exports.getAllFilesBasedOnFolderIdDao = async (user_id, folder_id) => {
     return await fileSchema.find({user_id, folder_id}, { user_id: 0 });
}