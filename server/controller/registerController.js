const uploadToCloudinary = require('../helpers/cloudinaryHelpers.js');
const bcrypt = require('bcryptjs');
const User = require('../models/accountModel.js');
const userRegister = async(req, res) => {
    try{  const image = req.file;
          console.log(image);
      if(!image){
            return res.status(404).json({ success: false, message: 'file is required!'});
        }
        
        const {url, publicId} = await uploadToCloudinary(req.file.path);
        const {username, email, password, retypePassword, role} = req.body;
        const user = await User.findOne({username});
        const userEmail = await User.findOne({email});
      
        

        if(username === ''){
           return res.status(404).json({ success: false, message: 'Username is required!!'});
        } 

        if(user){
           return res.status(404).json({ success: false, message: 'Username is already taken!!' });
        }

        if(username.length < 5 || username.length > 50){
           return res.status(404).json({ success: false, message: 'Username should be 5–50 characters!!'}) 
        }

        if(email === ''){
           return res.status(404).json({ success: false, message: 'Email is required!!'});
        } 

        if(userEmail){
           return res.status(404).json({ success: false, message: 'Email is already registered!!'});
        } 

        if(password === ''){
           return res.status(404).json({ success: false, message: 'Password is required!!'});
        }

        if(password.length < 5 || password.length > 50){
           return res.status(404).json({ success: false, message: 'password should be 5–50 characters!!'}) 
        }

        if(retypePassword === ''){
           return res.status(404).json({ success: false, message: 'Retype-Password is required!!'});
        }

        if(password !== retypePassword){
            return res.status(400).json({ success: false, message: 'Passwords dont match!!' });
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                url, publicId, username, email, password: hashedPassword, retypePassword: hashedPassword, role
            });

            res.status(201).json({ success: true, message: 'Account successfully created', newUser});   
        }
        
    }catch(error){
        res.status(404).json({ success: false, 
                               message: error.message
                               //message: error.message //print all the error in one
                               });
    }
}

module.exports = userRegister;
