import React from 'react';
import { WiredRadioGroup, WiredRadio } from '../src';
import { color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WiredRadioGroup',
};

export const Default = () => {
  const radioColor = color('color', 'currentColor');
  return (
    <WiredRadioGroup selected="item1" onSelect={action('onClick Fired')}>
      <WiredRadio color={radioColor} name="item1">
        Item 1
      </WiredRadio>
      <WiredRadio color={radioColor} name="item2">
        Item 2
      </WiredRadio>
      <WiredRadio color={radioColor} name="item3">
        Item 3
      </WiredRadio>
    </WiredRadioGroup>
  );
};
