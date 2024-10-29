import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handledelete }) {
    // Conditional rendering if no feedback exists
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id}
                initial={{opacity:0}}
                animate= {{opacity:1}}
                exit={{opacity :0}} >
                    <FeedbackItem key={item.id} item={item} handledelete={handledelete} />
                </motion.div>
                   
                ))}
            </AnimatePresence>
            
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    handledelete: PropTypes.func.isRequired,
};

export default FeedbackList;
