const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{ type: String,
               required: [true, 'username is required!!'],
               unique: [true, 'username is already taken!!'],
               trim: true,
               maxLength: [100, 'username cannot be more than 100 letters']
    },
    email:{ type: String,
            required: [true, 'email is required!!'],
            unique: [true, 'email is already registered!!'],
            trim: true,
            maxLength: [100, 'email cannot be more than 100 letters']
    },
    password: { type: String,
                required: [true, 'password is required!!'],
                trim: true,
                maxLength: [100, 'password cannot be more than 100 letters!!'],
    },
    retypePassword: { type: String,
                required: [true, 'password is required!!'],
                trim: true,
                maxLength: [100, 'password cannot be more than 100 letters!!'],
    },
    role: { type: String,
            enum: ["admin", "user"],
            default: "user"
    },
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);