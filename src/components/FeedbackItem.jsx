import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item, handledelete }) { 
    // Click handler to delete an item
    const handleClick = () => {
        handledelete(item.id);
    };

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={handleClick} className="close">
                <FaTimes color='purple' /> 
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    handledelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
