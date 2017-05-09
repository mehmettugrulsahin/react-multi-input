import "./Input.scss";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange = (onChange, e) => {
    onChange(e);
  }

  handleKeyDown = (onKeyDown, e) => {
    if (this.refs.input.value !== '' &&
        (e.keyCode === 9 ||
          e.keyCode === 188
        )) {
      e.preventDefault();
    }

    if ((this.refs.input.value === '' && e.keyCode === 8) ||
          e.keyCode === 13 ||
          e.keyCode === 9 ||
          e.keyCode === 188) {
      onKeyDown(e);
    }
  }

  render() {
    const { onChange, onKeyDown, borderless, val } = this.props;

    return (
      <input
          ref="input"
          value={val}
          onChange={(e) => this.handleChange(onChange, e)}
          onKeyDown={(e) => this.handleKeyDown(onKeyDown, e)}
          className={classNames('input', {
              'input--borderless': borderless
          })}
      >
      </input>
    )
  }
}

Input.defaultProps = {
  borderless: false,
  onChange: () => {},
  onKeyDown: () => {}

};

Input.PropTypes = {
  borderless: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
