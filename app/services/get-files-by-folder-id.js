const { getAllFilesBasedOnFolderIdDao } = require('../dao');
const { messages: { NO_DATA } } = require('../shared/constant');

module.exports.getAllFilesBasedOnFolderId = async (req, res, next) => {
    try { 
        const { loggedinUser: { _id: user_id } } = req;
        const { params: { folder_id } } = req;
        const documents = await getAllFilesBasedOnFolderIdDao(user_id, folder_id);
        if(documents && documents.length > 0) {
            res.body = {
                data: documents
            };
        } else {
            res.body = { message: NO_DATA }
        }
        next();
    } catch(error) {
        next(error)
    }
}