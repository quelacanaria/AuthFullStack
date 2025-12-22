const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    url: {type: String, trim: true},
    publicId: {type: String, trim: true},
    username:{ type: String, trim: true, },
    email:{ type: String, trim: true, },
    password: { type: String, trim: true, },
    retypePassword: { type: String, trim: true, },
    role: { type: String, enum: ["admin", "user"], default: "user" },
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);