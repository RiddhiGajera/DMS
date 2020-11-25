const { fileSchema } = require('../models/file-model');

module.exports.getFileByIdDao = async (searchParams) => {
    try {
        const file = await fileSchema.find(searchParams);
        return file;
    }catch(error) {
        return undefined;
    }
}