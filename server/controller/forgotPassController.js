const User = require('../models/accountModel.js');
const bcrypt = require('bcryptjs');
const userForgotPassword = async(req, res) => {
    try{
        const {username, email, password, retypePassword} = req.body;
        const user = await User.findOne({username});
    
        if(!user){
            return res.status(404).json({ success: false, message: 'Username does not match!'})
        }
        if(user.email !== email){
            return res.status(404).json({ success: false, message: 'Email does not match'});
        }
        if(password === ''){
            return res.status(404).json({ success: false, message: 'Create new Password is required!'});
        }
        if(retypePassword === ''){
            return res.status(404).json({ success: false, message: 'Retype Password is required!!'});
        }
        if(password !== retypePassword){
            return res.status(404).json({ success: false, message: 'Password does not match'});
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
            await user.save();
            return res.status(200).json({ success: true, message: 'Password successfully changed!'});
        }

    }catch(error){
        res.status(500).json({ success: false, message: error.message});
    }
}

module.exports = userForgotPassword;