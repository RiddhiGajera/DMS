const { messages: { FOLDER_EXIST } } = require('../shared/constant');
const { checkFolderExistDao } = require('../dao');

module.exports.checkFolderExist = async (req, res, next) => {
    try {
        const { name, user_id } = req.body;
        const isFolderExist = await checkFolderExistDao({name, user_id});
        res.isFolderExist = isFolderExist;
        next();
    }catch(error) {
        next(error);
    }
}