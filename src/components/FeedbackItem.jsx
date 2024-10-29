// src/components/FeedbackList.js
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
    const { feedback, deleteFeedback } = useContext(FeedbackContext); // Access context data

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handledelete={deleteFeedback} />
            ))}
        </div>
    );
}

export default FeedbackList;
