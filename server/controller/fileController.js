const uploadToCloudinary = require('../helpers/cloudinaryHelpers.js');
const Image = require('../models/imageModel.js');

const uploadImage = async(req, res) => {
    try{
        if(!req.file){
            res.status(404).json({ success: true, message: 'file is required!!'});
        }
        const {url, publicId} = await uploadToCloudinary(req.file.path);
        const userImage = await Image.create({
            url, publicId, uploadedBy: req.userInfo.userId
        });
        if(!userImage){
            res.status(404).json({ success: false, message: 'ff'})
        }
        res.status(201).json({ success: true, message: 'Image successfully uploaded', userImage}); 

    }catch(error){
        console.log('error -> ', error);
        res.status(500).json({ success: false, message: error.message});
    }
}

module.exports = uploadImage;