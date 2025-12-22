const User = require('../models/accountModel');
const signAndSetToken = require('../utils/signAndSetToken.js');

const userChangeEmail = async(req, res) => {
    try{
        const userId = req.userInfo.userId;
        const user = await User.findById(userId);
        const {Old, New} = req.body;

        if(user.email !== Old){ return res.status(404).json({ success: false, message: 'Old email does not match!'})}

        if(New === ''){ return res.status(404).json({ success: false, message: 'New Email is required!!'})}
        
        if(user.email === New){ return res.status(404).json({ success: false, message: 'Create new Password!!'})}
        
        user.email = New;
        await user.save();
        signAndSetToken(res, user);
        return res.status(200).json({ success: true, message: 'Email Updated successfully'});

    }catch(error){
        return res.status(500).json({ success: false, message: error.message});
    }
}

module.exports = userChangeEmail;