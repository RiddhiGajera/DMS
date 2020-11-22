const { userSchema } = require('../models/user-model');

module.exports.getAllDocumentsDao = async () => {
    // TODO will get the documents baed on the user, will implement once login is done 
    return await userSchema.find({}, { _id: 0, username: 0, password: 0, createdAt: 0, updatedAt: 0});
}