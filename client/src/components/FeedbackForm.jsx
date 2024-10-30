// src/components/FeedbackForm.js
import React, { useState, useEffect, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback, rating, setRating } = useContext(FeedbackContext);

    // Load feedback to edit when `feedbackEdit` changes
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit, setRating]);

    const handleTextChange = (e) => {
        const value = e.target.value;
        if (value === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (value.trim().length < 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = { text, rating }; // Use context rating
            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item._id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
            setText('');
            setRating(10);
            setBtnDisabled(true);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>{feedbackEdit.edit ? 'Edit your review' : 'How would you rate our service?'}</h2>
                <RatingSelect /> {}
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        {feedbackEdit.edit ? 'Update' : 'Send'}
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
