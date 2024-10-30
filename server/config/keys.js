// server/config/keys.js
require('dotenv').config();

console.log('Mongo URI:', process.env.MONGO_URI);  // Debug line to check URI

module.exports = {
    mongoURI: process.env.MONGO_URI,
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
};
