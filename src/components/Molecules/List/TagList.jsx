import './TagList.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../Molecules/Info/Tag';

const TagList = ({ items }) => (
  <div className="tag-list">
    {items && items.length > 0 ? items.map((item, index) => (
      <Tag
        key={index}
        id={item.id}
        text={item.text} />
    )) : null}
  </div>
);

TagList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default TagList;
