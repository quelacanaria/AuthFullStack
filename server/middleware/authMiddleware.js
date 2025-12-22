const jwt = require('jsonwebtoken');
const tokenKey = process.env.JWT_SECRET_KEY;
const authMiddleware = async(req, res, next) => {

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try{ 
        const decodedInfo = jwt.verify(token, tokenKey);
        req.userInfo = decodedInfo;
        next();
    }catch(error){
        res.status(401).json({ success: false, message: 'Invalid credentials!!'});
    }
}

module.exports = authMiddleware;