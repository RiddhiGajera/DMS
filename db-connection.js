const mongoose = require('mongoose');
const { userSchema } = require('./app/models/user-model');
const { users } = require('./app/data/user.json');

module.exports = {
  initDb: async (dbProperties) => {
    await mongoose.connect(dbProperties.connectionURL, dbProperties.options);
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const userData = new userSchema(user);
      await userData.save();
    }
  }
};