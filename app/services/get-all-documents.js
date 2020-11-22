const { getAllDocumentsDao } = require('../dao');
const { messages: { NO_DATA } } = require('../shared/constant');

module.exports.getAllDocuments = async (req, res, next) => {
    try { 
        const documents = await getAllDocumentsDao();
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