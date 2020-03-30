import React from 'react';
import { WiredButton } from '../src';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredButton',
};

export const Default = () => (
  <WiredButton
    elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
    disabled={boolean('disabled', false)}
    onClick={action('onClick Fired')}
  >
    {text('children', 'Click Me!')}
  </WiredButton>
);
