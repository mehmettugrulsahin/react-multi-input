import './Label.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = ({ size, text, striking }) => (
    <strong
        className={classNames('label', {
            'label--striking': striking,
            'label--small': size === 'small',
            'label--medium': size === 'medium'
        })}
    >
      {text}
    </strong>
);

Label.defaultProps = {
    striking: false,
    size: 'medium'
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    striking: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium'])
};

export default Label;
