const User = require('../models/accountModel.js');
const bcrypt = require('bcryptjs');
const signAndSetToken = require('../utils/signAndSetToken.js');
const userLogin = async(req, res) => {
    try{

        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user){ return res.status(401).json({ success: false, message: 'Invalid username!', })}

        const isPassMatch = await bcrypt.compare(password, user.password);
        if(!isPassMatch){ return res.status(401).json({ success: false, message: 'Invalid password!' })}
        
        signAndSetToken(res, user);
        return res.status(200).json({ success: true, message: 'account successfully logged in', user});
        
    }catch(error){
        return res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = userLogin;