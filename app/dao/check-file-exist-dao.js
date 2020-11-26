const { fileSchema } = require('../models/file-model');

module.exports.checkFileExistDao = async (searchParams) => {
    try {
        const file = await fileSchema.find(searchParams);
        return file.length > 0 ? true : false;
    }catch(error) {
        return false;
    }
}