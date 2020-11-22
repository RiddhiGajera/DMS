const mongoose = require('mongoose');

module.exports = {
  initDb: async (dbProperties) => {
    await mongoose.connect(dbProperties.connectionURL, dbProperties.options);
  }
};