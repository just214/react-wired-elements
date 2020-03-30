import React from 'react';
import { WiredTab } from '../src';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'WiredTab',
};

export const Default = () => (
  <WiredTab name={text('name', 'Tab Name')}>
    {text('children', 'Tab Contents')}
  </WiredTab>
);
