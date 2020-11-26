const { userSchema } = require('../models/user-model');

module.exports.getUserByName = async (username) => {
    const user = await userSchema.findOne({username}, { username: 0, password: 0, createdAt: 0, updatedAt: 0 }); 
    return user ? user : undefined ;
}