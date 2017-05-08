import multiInputCardData from './data/MultiInputCardData';

import React from 'react';
import ReactDOM from 'react-dom';
import MultiInputCard from './components/Templates/Input/MultiInputCard';

const { intro, mails, telephones } = multiInputCardData;

ReactDOM.render(
  <MultiInputCard
    intro={intro}
    mails={mails}
    telephones={telephones}
  />,
  document.getElementById('root')
);
