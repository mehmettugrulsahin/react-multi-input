import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from '../components/Atoms/Image/Icon';
import Heading from '../components/Atoms/Title/Heading';
import Info from '../components/Atoms/Text/Info';

import Label from '../components/Atoms/Text/Label';

import Tag from '../components/Molecules/Info/Tag';

import TagList from '../components/Molecules/List/TagList';
import MultiInput from '../components/Organisms/Card/MultiInput';
import MultiInputCard from '../components/Templates/Input/MultiInputCard';

const intro = {
    "title": "Uitbetalingen",
    "description": "Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen."
};

const mails = {
    "title": "E-mailadressen",
    "items":[
        {
           "id":0,
           "text":"me@me.com"
        },
        {
           "id":1,
           "text":"ali@baba.com"
        },
        {
           "id":2,
           "text":"jos@tol.com"
        },
        {
           "id":3,
           "text":"one@abc.com"
        },
        {
           "id":4,
           "text":"two@abc.com"
        },
        {
           "id":5,
           "text":"three@abc.com"
        },
        {
           "id":6,
           "text":"four@abc.com"
        },
        {
           "id":7,
           "text":"five@abc.com"
        }
    ]
};

const telephones = {
    "title": "Telefoonnummers",
    "description": "€ 0.99 per sms-bericht. Beperkt tot 3 telefoonnummers."
};

storiesOf('Icon', module)
  .add('cross', () => (
    <Icon name={'cross'} width={"10"} height={"10"} />
  ))
  .add('printer', () => (
    <Icon name={'printer'} width={"22"} height={"22"} />
  ))
  .add('chevron-thin-left', () => (
    <Icon name={'chevron-thin-left'} width={"22"} height={"22"} />
  ))
  .add('chevron-thin-right', () => (
    <Icon name={'chevron-thin-right'} width={"22"} height={"22"} />
  ))

storiesOf('Heading', module)
  .add('h1', () => (
    <Heading size={'h1'} text={"Uitbetalingen"} />
  ))
  .add('h2', () => (
    <Heading size={'h2'} text={"Uitbetalingen"} />
  ))
  .add('h3', () => (
    <Heading size={'h3'} text={"Uitbetalingen"} />
  ))
  .add('h4', () => (
    <Heading size={'h4'} text={"Uitbetalingen"} />
  ));

  storiesOf('Info', module)
  .add('default', () => (
    <Info body={"Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen"} />
  ));

storiesOf('Label', module)
  .add('default', () => (
    <Label text={"E-mailadressen"} />
  ))
    .add('striking', () => (
    <Label text={"E-mailadressen"} striking />
  ));

storiesOf('Tag', module)
  .add('default', () => (
    <Tag id={mails.items[0].id} text={mails.items[0].text} />
  ));

storiesOf('TagList', module)
  .add('default', () => (
    <TagList items={mails.items} />
  ));

storiesOf('MultiInput', module)
  .add('default', () => (
    <MultiInput
      intro={intro}
      mails={mails}
      telephones={telephones}
    />
  ));

storiesOf('MultiInputCard', module)
  .add('default', () => (
    <MultiInputCard
      intro={intro}
      mails={mails}
      telephones={telephones}
    />
  ));
