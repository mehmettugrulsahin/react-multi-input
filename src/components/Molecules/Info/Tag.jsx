import './Tag.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from '../../Atoms/Text/Info';
import Icon from '../../Atoms/Image/Icon';

class Tag extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown = (onMouseDown) => {
    onMouseDown(this.props.id);
  }

  render() {
    const { onMouseDown, text } = this.props;

    return (
      <div
        onMouseDown={() => this.handleMouseDown(onMouseDown)}
        className="tag">
        <div className="tag__text">
          <Info size={'small'} body={text} />
        </div>
        <div className="tag__image">
          <Icon name={'cross'} width={"12"} height={"12"} />
        </div>
      </div>
    )
  }
}

Tag.defaultProps = {
    onMouseDown: () => {}
};

Tag.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func
};

export default Tag;
