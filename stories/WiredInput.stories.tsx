import React from 'react';
import { WiredInput } from '../src';
import { inputTypes } from '../src/utils/inputTypes';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredInput',
};

export const Default = () => (
  <WiredInput
    placeholder={text('placeholder', 'Email Address')}
    value=""
    type={select('type', inputTypes, 'email')}
    disabled={boolean('disabled', false)}
    onChange={action('onChange fired.')}
    onBlur={action('onBlur fired.')}
    onFocus={action('onFocus fired.')}
  />
);
