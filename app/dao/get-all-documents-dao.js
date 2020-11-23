const { folderSchema } = require('../models/folder-model');
const { fileSchema } = require('../models/file-model');

module.exports.getAllDocumentsDao = async (user_id) => {
     const folders = await folderSchema.find({user_id}, { user_id: 0 });
     const files = await fileSchema.find({user_id, folder_id: null}, { user_id: 0 });
     return [...folders, ...files];
}