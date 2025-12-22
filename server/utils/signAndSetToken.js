const jwt = require('jsonwebtoken');
const tokenKey = process.env.JWT_SECRET_KEY;
const expiration = { expiresIn: '30d'};

const signAndSetToken = (res, user) => {
     const accessToken = jwt.sign({
        url: user.url,
        publicId: user.publicId,
        userId: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        password: user.password
    }, tokenKey, expiration);
    
    res.cookie("token", accessToken, {
        httpOnly: true,
        secure: false, //set true in https
        sameSite: 'Lax',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });
    
}

module.exports = signAndSetToken;