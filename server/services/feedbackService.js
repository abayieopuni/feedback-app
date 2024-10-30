// server/services/feedbackService.js
const Feedback = require('../models/feedback');

const getAllFeedback = async () => {
    return await Feedback.find();
};

const getFeedbackById = async (id) => {
    return await Feedback.findById(id);
};

const createFeedback = async (data) => {
    const feedback = new Feedback(data);
    return await feedback.save();
};

const updateFeedback = async (id, data) => {
    return await Feedback.findByIdAndUpdate(id, data, { new: true });
};

const deleteFeedback = async (id) => {
    return await Feedback.findByIdAndDelete(id);
};

module.exports = {
    getAllFeedback,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback,
};
