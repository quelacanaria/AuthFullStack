const cloudinary = require('cloudinary');
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinarySecretKey = process.env.CLOUDINARY_SECRET_KEY;

cloudinary.config({
    cloud_name: cloudinaryName,
    api_key: cloudinaryApiKey,
    secret_key: cloudinarySecretKey
});

module.exports = cloudinary;