const { response } = require('../app/shared/common-response');
const { getAllDocuments } = require('./services');

module.exports = (app) => {
    app.get('/dms/documents', getAllDocuments, response)
}
