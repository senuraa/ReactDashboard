import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = props => {
  return (
    <FontAwesomeIcon icon={props.icon} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
