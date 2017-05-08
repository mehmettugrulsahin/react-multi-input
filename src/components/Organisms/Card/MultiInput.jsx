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
    <Heading size={'h3'} text={intro.title} />
    <Info body={intro.description} />

    <Label text={mails.title} />
    <TagList items={mails.items} />

    <Label text={telephones.title} />
    <Input />
    <Info body={telephones.description} />
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
          id: PropTypes.string,
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
