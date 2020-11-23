const { checkFolderExistDao } = require('../dao');

module.exports.checkFolderIdExist = async (req, res, next) => {
    try {
        const { folder_id: _id } = req.body;
        const { _id: user_id } = req.loggedinUser;
        if (_id !== null) {
            const isFolderExist = await checkFolderExistDao({_id, user_id});
            res.isFolderExist = isFolderExist;
        }
        res.isFolderExist = true;
        next();
    }catch(error) {
        next(error);
    }
}