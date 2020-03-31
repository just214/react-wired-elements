import React from 'react';
import { WiredItem } from '../src';
import { text } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredItem',
};

export const Default = () => (
  <Container>
    <WiredItem value="item1">
      {text(
        'children',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
      )}
    </WiredItem>
  </Container>
);
