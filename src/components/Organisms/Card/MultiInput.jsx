import './MultiInput.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../Atoms/Title/Heading';
import Info from '../../Atoms/Text/Info';

import Label from '../../Atoms/Text/Label';

import TagList from '../../Molecules/List/TagList';

import Input from '../../Atoms/Text/Input';

const MultiInput = ({ intro, mails, telephones }) => (
  <div className="multi-input">
    <div className="multi-input__container">
      <div className="multi-input__intro-title">
        <Heading size={'h4'} text={intro.title} />
      </div>
      <div className="multi-input__intro-description">
        <Info body={intro.description} />
      </div>

      <div className="multi-input__mails-title">
        <Label size={'small'} text={mails.title} />
      </div>
      <TagList items={mails.items} />

      <div className="multi-input__telephones">
        <div className="multi-input__telephones-title">
          <Label size={'small'} text={telephones.title} />
        </div>
        <div className="multi-input__telephones-input">
          <Input />
        </div>
        <Info size={'small'} body={telephones.description} />
      </div>
    </div>
  </div>
);

MultiInput.propTypes = {
    intro: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }),
    mails: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          text: PropTypes.string
        })
      )
    }),
    telephones: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
};

export default MultiInput;
