// server/config/db.js
const mongoose = require('mongoose');  // Ensure mongoose is imported
const keys = require('./keys');        // Import keys for MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
