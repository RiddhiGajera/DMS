const { checkFileExistDao } = require('../dao');

module.exports.checkFileExist = async (req, res, next) => {
    try {
        const { name, user_id, folder_id = null } = req.body;
        const isFileExist = await checkFileExistDao({name, user_id, folder_id});
        res.isFileExist = isFileExist;
        next();
    }catch(error) {
        next(error);
    }
}