const { checkFileExistDao, getFileByIdDao, moveFileDao, checkFolderExistDao } = require('../dao');
const { badRequest } = require('../shared/common-response');
const { messages: { FILE_EXIST_AT_DESTINATION, MOVE_SUCCESS, FOLDER_NOT_EXIST } } = require('../shared/constant');

module.exports.moveFile = async (req, res, next) => {
    try {
        const { body: { to, from }, params: { file_id }, loggedinUser: { _id: user_id } } = req; 
        // check the destination folder exists
        if(to !== null && to !== 'null') {
            const destinationExist = await checkFolderExistDao({_id: to, user_id});
            if (!destinationExist) {
                res.message = FOLDER_NOT_EXIST.replace('%folder_id', to);
                badRequest(req, res, undefined);
                return;
            }
        }
        
        // Check file with the same name dose not exist in the destination folder already
        console.log(file_id, to , from, user_id);
        const [file] = await getFileByIdDao({_id: file_id});
        console.log(file.name);
        const isFileExistIndestination = await checkFileExistDao({ name: file.name, folder_id: to, user_id: user_id });
        console.log(isFileExistIndestination);

        if (isFileExistIndestination) {
            res.message = FILE_EXIST_AT_DESTINATION.replace('%name', file.name);
            badRequest(req, res, undefined);
            return;
        }
        
        const fileMoved = await moveFileDao({file_id, user_id, to});
        res.body = { message: MOVE_SUCCESS };
        next();
    }catch(error) {
        next(error);
    }
}