import './Heading.scss';
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = ({ size, text }) => (
    createElement(size, {
        className: classNames(`heading heading--${size}`)
    },
        <span className="heading__text">{text}</span>
    )
);

Heading.defaultProps = {
    isItalic: false
}

Heading.propTypes = {
    size: PropTypes.string,
    text: PropTypes.string,
    isItalic: PropTypes.bool
};

export default Heading;
