// server/utils/seedData.js
// server/utils/seedData.js
require('dotenv').config();  // Force .env loading here
const mongoose = require('mongoose');
const keys = require('../config/keys');
const connectDB = require('../config/db');
const Feedback = require('../models/feedback');

console.log('Mongo URI from keys:', keys.mongoURI);  // Debugging line

connectDB();

const seedFeedbackData = async () => {
    const feedbackData = [
        { rating: 5, text: 'Excellent service!' },
        { rating: 4, text: 'Great overall, minor issues.' },
        { rating: 3, text: 'Average experience.' },
        { rating: 2, text: 'Somewhat disappointed.' },
        { rating: 1, text: 'Not satisfied at all.' }
    ];

    try {
        await Feedback.deleteMany(); // Clear existing data
        const createdFeedback = await Feedback.insertMany(feedbackData); // Insert new data
        console.log('Seed data inserted:', createdFeedback);
    } catch (error) {
        console.error('Error inserting seed data:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedFeedbackData();

