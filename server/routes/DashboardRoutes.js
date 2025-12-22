const express = require('express');
const homeRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js');

homeRouter.get('/welcome', authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: `${req.userInfo.username} welcome to Dashboard`,
        user: req.userInfo,
    })
});

module.exports = homeRouter;