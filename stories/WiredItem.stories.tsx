import React from 'react';
import { WiredItem } from '../src';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'WiredItem',
};

export const Default = () => (
  <WiredItem value="item1">
    {text(
      'children',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    )}
  </WiredItem>
);
