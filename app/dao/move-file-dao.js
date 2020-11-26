const { fileSchema } = require('../models/file-model');

module.exports.moveFileDao = async (params) => {
    const { file_id: _id, user_id, to: folder_id } = params;
    return await fileSchema.findOneAndUpdate({ _id, user_id }, { folder_id });
}