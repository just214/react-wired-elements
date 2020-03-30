import React from 'react';
import { WiredSearchInput } from '../src';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredSearchInput',
};

export const Default = () => (
  <WiredSearchInput
    placeholder={text('placeholder', 'Email Address')}
    disabled={boolean('disabled', false)}
    onChange={action('onChange Fired')}
    onBlur={action('onBlur Fired')}
    onFocus={action('onFocus Fired')}
  />
);
