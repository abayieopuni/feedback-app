
import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) { 
  return (
    <button 
      type={type} 
      disabled={isDisabled} 
      className={`btn btn-${version}`} 
    >
      {children}
    </button>
  );
}

// Set default props
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

// Define PropTypes
Button.propTypes = { 
  children: PropTypes.node.isRequired, 
  version: PropTypes.string, 
  type: PropTypes.string, 
  isDisabled: PropTypes.bool, 
};

export default Button;
