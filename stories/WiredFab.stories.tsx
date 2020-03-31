import React from 'react';
import { WiredFab } from '../src';
import { boolean, color, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { icons } from '../src/utils/icons';
import { Container } from './Container';

export default {
  title: 'WiredFab',
};

export const Default = () => (
  <Container>
    <WiredFab
      disabled={boolean('disabled', false)}
      onClick={action('onClick Fired')}
      bgColor={color('bgColor', '#018786')}
      icon={select('icon', icons, 'favorite')}
      iconColor={color('color', '#fff')}
    />
  </Container>
);
