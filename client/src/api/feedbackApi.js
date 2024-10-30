// client/src/api/feedbackApi.js
import axios from 'axios';

const API_URL = '/api/feedback';

// Fetch all feedback from the backend
export const fetchFeedback = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("Fetched Feedback:", response.data); // Check if data is returned
        return response.data;
    } catch (error) {
        console.error("Error fetching feedback:", error);
        throw error;
    }
};


// Add new feedback to the backend
export const addFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(API_URL, feedbackData);
        return response.data;
    } catch (error) {
        console.error("Error adding feedback:", error);
        throw error;
    }
};

// Update feedback by ID on the backend
export const updateFeedback = async (id, feedbackData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, feedbackData);
        return response.data;
    } catch (error) {
        console.error("Error updating feedback:", error);
        throw error;
    }
};

// Delete feedback by ID from the backend
export const deleteFeedback = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting feedback:", error);
        throw error;
    }
};
