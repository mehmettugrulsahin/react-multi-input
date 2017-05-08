import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultiInput from '../../Organisms/Card/MultiInput';

class MultiInputCard extends Component {
  render() {
    const { intro, mails, telephones } = this.props;

    return(
        <MultiInput
          intro={intro}
          mails={mails}
          telephones={telephones}
        />
    )
  }
}

MultiInputCard.propTypes = {
    intro: PropTypes.object.isRequired,
    mails: PropTypes.object.isRequired,
    telephones: PropTypes.object.isRequired
};

export default MultiInputCard;
