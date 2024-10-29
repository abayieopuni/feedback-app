// src/components/RatingSelect.js
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect() {
    const { rating, setRating } = useContext(FeedbackContext); // Access rating and setRating from context

    const handleChange = (e) => {
        setRating(+e.currentTarget.value); // Update rating in context
    };

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={rating === i + 1} // Use context rating to set checked status
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    );
}

export default RatingSelect;
