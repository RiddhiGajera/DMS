const { checkFolderExistDao } = require('../dao');

module.exports.checkFolderIdExist = async (req, res, next) => {
    try {
        const { folder_id: _id, user_id } = req.body;
        const isFolderExist = await checkFolderExistDao({_id, user_id});
        res.isFolderExist = isFolderExist;
        next();
    }catch(error) {
        next(error);
    }
}