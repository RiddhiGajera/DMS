const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    user_id: { type: mongoose.Schema.ObjectId, ref: 'users', required: true},
    folder_id: { type: mongoose.Schema.ObjectId, ref: 'folders', default: null},
    },
    { versionKey: false });
    
fileSchema.index({ name: 1, user_id: 1, folder_id: 1 }, { unique: true })
fileSchema.set('timestamps', true);

module.exports.fileSchema = mongoose.model('files', fileSchema);