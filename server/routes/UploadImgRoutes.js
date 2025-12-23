const express = require('express');
const uploadRouter = express.Router();
const fileController = require('../controller/fileController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const adminMiddleware = require('../middleware/adminMiddleware.js');
const uploadMiddleware = require('../middleware/uploadMiddleware.js');

uploadRouter.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), fileController);

module.exports = uploadRouter;