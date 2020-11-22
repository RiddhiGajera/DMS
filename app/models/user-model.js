const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    folders: [{ type: mongoose.Schema.Types.ObjectId, ref:'folders' }],
    files: [{ type: mongoose.Schema.Types.ObjectId, ref:'files' }]
 },
 { versionKey: false });

userSchema.set('timestamps', true);

module.exports.userSchema = mongoose.model('users', userSchema);