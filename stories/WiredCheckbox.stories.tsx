import React from 'react';
import { WiredCheckbox } from '../src';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredCheckbox',
};

export const Default = () => {
  return (
    <WiredCheckbox
      checked={true}
      disabled={boolean('disabled', false)}
      onChange={action('onChange Fired')}
      color={color('color', 'currentColor')}
    />
  );
};
