const express = require('express');
const adminRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js');
const adminMiddleware = require('../middleware/adminMiddleware.js')
const User = require('../models/accountModel.js');

adminRouter.get('/welcome', authMiddleware, adminMiddleware, async(req, res) => {
    try {
        const count = await User.countDocuments({role: 'user'});
        const adminCount = await User.countDocuments({role: 'admin'});
        res.json({
            success: true,
            message: `Welcome admin ${req.userInfo.username }`,
            user: req.userInfo,
            count,
            adminCount
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

});

module.exports = adminRouter;