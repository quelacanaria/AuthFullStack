const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    url: {type: String, trim: true},
    publicId:{type: String, trim: true},
    uploadedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', trim: true}
}, {timestamps: true});

module.exports = mongoose.model('Image', ImageSchema);