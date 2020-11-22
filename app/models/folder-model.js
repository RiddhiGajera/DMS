const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
    name: { type: String, required: true },
    user_id: { type: mongoose.Schema.ObjectId, ref: 'users', required: true},
    },
    { versionKey: false });
    
folderSchema.index({ name: 1, user_id: 1 }, { unique: true })
folderSchema.set('timestamps', true);

module.exports.folderSchema = mongoose.model('folders', folderSchema);