const { getFileByIdDao } = require('../dao');
const { badRequest } = require('../shared/common-response');
const { messages: { FILE_NOT_EXIST } } = require('../shared/constant');

module.exports.checkFileIdExist = async (req, res, next) => {
    try {
        const { params: { file_id: _id }, loggedinUser: { _id: user_id }, body: { from: folder_id } } = req;
        const file = await getFileByIdDao({_id, user_id, folder_id: folder_id === 'null'? null : folder_id });
        if(file && file.length > 0) {
            next();
        } else {
            res.message = FILE_NOT_EXIST.replace('%file_id', _id)
            badRequest(req, res, undefined);
            return;
        }
    }catch(error) {
        next(error);
    }
}