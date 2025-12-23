const cloudinaryHelpers = require('../helpers/cloudinaryHelpers.js');

const deleteImageController = async(req, res) => {
    try{
        
    }catch(error){
        console.log('error -> ', error);
        res.status(500).json({ sucess: false, message: error.message});
    }
}

module.exports = deleteImageController;