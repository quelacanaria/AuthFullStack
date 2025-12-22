const User = require('../models/accountModel.js');
const signAndSetToken = require('../utils/signAndSetToken.js');
const userChangeUsername = async(req, res) => {
    try{
        const userId = req.userInfo.userId;
        const {Old, New} = req.body;
        const user = await User.findById(userId);
        
        if(!user){ return res.status(404).json({ success: false, message: 'User not found'})}
        
        if(user.username !== Old){ return res.status(404).json({ success: false, message: 'old username does not match!'})}
        
        if(New === ''){ return res.status(404).json({ success: false, message: 'New Username is required!'})}
        
        if(Old === New){return res.status(404).json({ success: false, message: 'please create new Username!!'})}
        
        user.username = New;
        await user.save();
        
        signAndSetToken(res, user);
        res.status(201).json({ success: true, message: 'Username successfully changed!'});

    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = userChangeUsername;