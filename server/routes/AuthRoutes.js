const express = require('express');
const userRegister = require('../controller/registerController.js');
const userLogin = require('../controller/loginController.js');
const userForgotPassword = require('../controller/forgotPassController.js');
const userLogout = require('../controller/logoutController.js');
const userChangePass = require('../controller/changePasswordController.js');
const userChangeUsername = require('../controller/changeUsernameController.js');
const userChangeEmail = require('../controller/changeEmailController.js');
const userProfileChange = require('../controller/changeProfileController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const uploadMiddleware = require('../middleware/uploadMiddleware.js');
const authRouter = express.Router();

authRouter.post('/login', userLogin);
authRouter.post('/register', uploadMiddleware.single('image'), userRegister);
authRouter.post('/forgotPassword', userForgotPassword);
authRouter.post('/changePassword', authMiddleware, userChangePass)
authRouter.post('/changeUsername', authMiddleware, userChangeUsername);
authRouter.post('/changeEmail', authMiddleware, userChangeEmail);
authRouter.post('/changeProfile', authMiddleware, uploadMiddleware.single('image'), userProfileChange)
authRouter.post('/logout',  userLogout);

module.exports = authRouter;