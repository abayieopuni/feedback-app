/// src/context/FeedbackContext.js
import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: null, edit: false });
    const [rating, setRating] = useState(10); // New state for current rating

    // Function to add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    // Function to delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    // Set feedback item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
        setRating(item.rating); // Set the rating to the item’s current rating when editing
    };

    // Update feedback
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
        setFeedbackEdit({ item: null, edit: false });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                rating,         // Provide rating state
                setRating,      // Provide setRating function
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
