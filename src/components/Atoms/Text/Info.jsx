import "./Info.scss";
import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

const Info = ({ size, body }) => (
    <div
        className={classNames('info', {
            'info--small': size === 'small',
            'info--medium': size === 'medium'
        })}
    >
      {body}
    </div>
);

Info.propTypes = {
    body: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium'])
};

export default Info;
