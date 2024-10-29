import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
    // Calculate average rating
    const average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
    const formattedAverage = average.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(formattedAverage) ? 0 : formattedAverage}</h4>
        </div>
    );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FeedbackStats;
