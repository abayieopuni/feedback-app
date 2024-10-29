// src/components/FeebackStats.js
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeebackStats() {
    const { feedback } = useContext(FeedbackContext); // Access feedback data

    // Calculate the average rating
    const average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
    const formattedAverage = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(formattedAverage) ? 0 : formattedAverage}</h4>
        </div>
    );
}

export default FeebackStats;
