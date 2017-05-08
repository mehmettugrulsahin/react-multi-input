import './Tag.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from '../../Atoms/Text/Info';
import Icon from '../../Atoms/Image/Icon';

class Tag extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="tag">
        <Info body={text} />
        <Icon name={'cross'} width={"10"} height={"10"} />
      </div>
    )
  }
}

Tag.propTypes = {
  status: PropTypes.string,

};

export default Tag;
