const mongoose = require('mongoose');
const myDatabase = process.env.DATABASE;

const connectToDb = async() => {
    try{
        await mongoose.connect(myDatabase);
        console.log('Successfully connected to database!');
    }catch(error){
        console.log('error -> ', error);
    }
}

module.exports = connectToDb;