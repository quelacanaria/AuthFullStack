require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./database/database.js');
const authRouter = require('./routes/AuthRoutes.js');
const homeRouter = require('./routes/DashboardRoutes.js');
const adminRouter = require('./routes/AdminRoutes.js');
const uploadRouter = require('./routes/UploadImgRoutes.js');
const settingsRouter = require('./routes/SettingsRoutes.js');
const app = express()

connectToDb();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use('/api/auth', authRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/Dashboard', homeRouter);
app.use('/api/Admin', adminRouter);
app.use('/api/Image', uploadRouter);

app.get('/', (req, res) => {
    res.send('welcome to auth');
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is now listening to port ${PORT}`);
});