const { createFolderDao } = require('../dao');
const { messages: { FOLDER_SUCCESS, FOLDER_EXIST } } = require('../shared/constant');

module.exports.createFolder = async (req, res, next) => {
    try {
        const { name, user_id } = req.body;
        const { isFolderExist } = res;
        if (!isFolderExist) {
            const createFolderRes = await createFolderDao({name, user_id});
            res.body = createFolderRes.status ? { message: FOLDER_SUCCESS.replace('%name', name)} : { message: (createFolderRes.message).replace('%name', name) };
            next();
        } else {
            res.body =  { message: FOLDER_EXIST.replace('%name', name)};
            next();
        }
    }catch(error) {
        next(error);
    }
}