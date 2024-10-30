// src/context/FeedbackContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: null, edit: false });
    const [rating, setRating] = useState(10);

    // Fetch feedback from backend
    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get('/api/feedback');
                setFeedback(response.data);
            } catch (error) {
                console.error("Error fetching feedback", error);
            }
        };
        fetchFeedback();
    }, []);
    

    // Function to add feedback
    const addFeedback = async (newFeedback) => {
        try {
            const response = await axios.post('/api/feedback', { 
                ...newFeedback,
                rating,  
            });
            setFeedback([response.data, ...feedback]);
        } catch (error) {
            console.error("Error adding feedback", error);
        }
    };

    // Function to delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`/api/feedback/${id}`);
                setFeedback(feedback.filter((item) => item._id !== id));
            } catch (error) {
                console.error("Error deleting feedback", error);
            }
        }
    };

    // Set feedback item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
        setRating(item.rating);
    };

    // Update feedback
    const updateFeedback = async (id, updatedItem) => {
        try {
            const response = await axios.put(`/api/feedback/${id}`, updatedItem);
            setFeedback(feedback.map((item) => (item._id === id ? response.data : item)));
            setFeedbackEdit({ item: null, edit: false });
        } catch (error) {
            console.error("Error updating feedback", error);
        }
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                rating,
                setRating,
                addFeedback,
                deleteFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
