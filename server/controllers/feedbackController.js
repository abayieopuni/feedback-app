// server/controllers/feedbackController.js
const feedbackService = require('../services/feedbackService');

const getAllFeedback = async (req, res) => {
    console.log('Request received for getAllFeedback')
    try {
        const feedback = await feedbackService.getAllFeedback();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback' });
    }
}; 

const getFeedbackById = async (req, res) => {
    try {
        const feedback = await feedbackService.getFeedbackById(req.params.id);
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback' });
    }
};

const createFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.createFeedback(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: 'Error creating feedback' });
    }
};

const updateFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.updateFeedback(req.params.id, req.body);
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ message: 'Error updating feedback' });
    }
};

const deleteFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.deleteFeedback(req.params.id);
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.status(200).json({ message: 'Feedback deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting feedback' });
    }
};

module.exports = {
    getAllFeedback,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback,
};
