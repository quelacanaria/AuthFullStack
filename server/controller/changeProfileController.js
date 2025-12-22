const User = require('../models/accountModel.js');
const signAndSetToken = require('../utils/signAndSetToken.js');
const cloudinary = require('../config/cloudinary.js');
const uploadToCloudinary = require('../helpers/cloudinaryHelpers.js');
const fs = require('fs');
const userProfileChange = async(req, res) => {
    try{
        const userId = req.userInfo.userId;
        const user = await User.findById(userId);
        
        if(!req.file){ return res.status(404).json({ success: false, message: 'Image is required!!'})}

        if (!user) { return res.status(404).json({ success: false, message: 'User not found'});}

        if(user.publicId){ await cloudinary.uploader.destroy(user.publicId) }
        
        const {url, publicId} = await uploadToCloudinary(req.file.path);
        
        fs.unlinkSync(req.file.path);
        
        user.url = url;
        user.publicId = publicId;
        await user.save();
        
        signAndSetToken(res, user);        
        res.status(200).json({ success: true, message: 'Profile updated successfully'});

    }catch(error){
       return res.status(404).json({ success: false, message: error.message});
    }
}

module.exports = userProfileChange;