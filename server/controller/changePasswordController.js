const User = require('../models/accountModel.js');
const bcrypt = require('bcryptjs');
const signAndSetToken = require('../utils/signAndSetToken.js');
const userChangePass = async(req, res) => {
    try{
        const userId = req.userInfo.userId;
        const {Old, New} = req.body;
        const user = await User.findById(userId);
        if(!user){ return res.status(404).json({ success: false, message: 'User not found'})}
        
        const isPassMatch = await bcrypt.compare(Old, user.password);
        
        if(!isPassMatch){ return res.status(404).json({ success: false, message: 'old password does not match'})}
        
        if(New === ''){ res.status(404).json({ success: false, message: 'New Password is required!!'}) }
        
        if(New.length < 5 || New.length > 50){res.status(404).json({ success: false, message: 'New Password should be 5–50 characters!!'})}
        
        if(Old === New){ return res.status(404).json({ success: true, message: 'create new password!!'})}
        
        const salt = await bcrypt.genSalt(10);
        const hashedNewPass = await bcrypt.hash(New, salt);
        user.password = hashedNewPass;
        await user.save();
        
        signAndSetToken(res, user);
        res.status(201).json({ success: true, message: 'Password successfully changed!'});

    }catch(error){
        console.log('error -> ', error);
        res.status(500).json({ success: false, message: error.message});
    }
}

module.exports = userChangePass;