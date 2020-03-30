import React from 'react';
import { WiredCombo, WiredItem } from '../src';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredCombo',
};

export const Default = () => {
  return (
    <WiredCombo
      disabled={boolean('disabled', false)}
      onSelect={action('onSelect Fired')}
      popupBgColor={color('popupBgColor', 'white')}
      selectedBgColor={color('selectedBgColor', 'gray')}
    >
      <WiredItem value="item1">Item 1</WiredItem>
      <WiredItem value="item2">Item 2</WiredItem>
      <WiredItem value="item3">Item 3</WiredItem>
    </WiredCombo>
  );
};
