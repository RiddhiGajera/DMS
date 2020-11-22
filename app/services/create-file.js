const { createFileDao } = require('../dao');
const { messages: { FILE_SUCCESS, FOLDER_NOT_EXIST, FILE_EXIST } } = require('../shared/constant');

module.exports.createFile = async (req, res, next) => {
    try {
        const { name, user_id, folder_id = null, content } = req.body;
        const { isFolderExist, isFileExist } = res;
        if (isFolderExist && !isFileExist) {
            const createFileRes = await createFileDao({name, user_id, folder_id, content});
            res.body = createFileRes.status ? { message: FILE_SUCCESS.replace('%name', name)} : { message: (createFileRes.message).replace('%name', name) };
            next();
        } else {
            if (!isFolderExist) {
                res.body =  { message: FOLDER_NOT_EXIST.replace('%folder_id', folder_id)};
                next();    
            } else {
                res.body =  { message: FILE_EXIST.replace('%name', name)};
                next();
            }
        }
    }catch(error) {
        next(error);
    }
}