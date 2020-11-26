const { userSchema } = require('../models/user-model');

module.exports.authenticateUser = async (user) => {
    return await userSchema.findOne(user);
} 