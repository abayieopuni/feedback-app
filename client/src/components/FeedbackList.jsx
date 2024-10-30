// src/components/FeedbackList.js
import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
    const { feedback, deleteFeedback } = useContext(FeedbackContext);

    // Check if feedback data exists and log for debugging
    console.log("Feedback data in FeedbackList:", feedback);

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                        key={item._id} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item._id} item={item} handledelete={deleteFeedback} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;
