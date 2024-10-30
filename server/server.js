// server/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const errorHandler = require('./middleware/errorHandler');
const keys = require('./config/keys');

connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Parse JSON bodies

app.use('/api/feedback', feedbackRoutes); // Mount feedback routes

app.use(errorHandler); // Custom error handling middleware

const PORT = keys.port;
app.listen(PORT, () => console.log(`Server running in ${keys.nodeEnv} mode on port ${PORT}`));
