const express = require('express');
const settingsRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js');

settingsRouter.get('/welcome', authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: `${req.userInfo.username} welcome to Settings`,
        user: req.userInfo,
    })
})

module.exports = settingsRouter;