import React from 'react';
import { WiredRadio } from '../src';
import { text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredRadio',
};

export const Default = () => (
  <Container>
    <WiredRadio
      checked={false}
      disabled={boolean('disabled', false)}
      name={text('name', 'Radio Name')}
      color={color('color', 'currentColor')}
      onChange={action('onClick Fired')}
    >
      {text('children', 'Join Newsletter')}
    </WiredRadio>
  </Container>
);
