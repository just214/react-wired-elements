import React from 'react';
import { WiredTab } from '../src';
import { text } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredTab',
};

export const Default = () => (
  <Container>
    <WiredTab name={text('name', 'Tab Name')}>
      {text('children', 'Tab Contents')}
    </WiredTab>
  </Container>
);
