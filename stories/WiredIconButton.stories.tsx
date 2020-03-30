import React from 'react';
import { WiredIconButton } from '../src';
import { boolean, color, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { icons } from '../src/utils/icons';

export default {
  title: 'WiredIconButton',
};

export const Default = () => (
  <WiredIconButton
    disabled={boolean('disabled', false)}
    onClick={action('onClick Fired')}
    icon={select('icon', icons, 'favorite')}
    iconSize={number('iconSize', 24)}
    lineColor={color('bgColor', '#018786')}
    iconColor={color('color', '#018786')}
  />
);
