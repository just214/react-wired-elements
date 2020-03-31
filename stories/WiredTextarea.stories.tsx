import React from 'react';
import { WiredTextarea } from '../src';
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredTextarea',
};

export const Default = () => (
  <Container>
    <WiredTextarea
      placeholder={text('placeholder', 'Enter your name')}
      value=""
      disabled={boolean('disabled', false)}
      rows={number('rows', 3)}
      maxRows={number('maxRows', 20)}
      onChange={action('onChange fired')}
      onFocus={action('onFocus fired')}
      onBlur={action('onBlur fired')}
    />
  </Container>
);
