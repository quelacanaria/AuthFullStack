
    const userLogout = async(req, res) => {
    
        
    res.clearCookie('token',{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        // expires: new Date(0)
        });

        res.json({
            success: true,
            message: 'Account Logged out Successfully'
        });
    }

    module.exports = userLogout;