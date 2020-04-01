import React from 'react';
import { WiredCheckBox } from '../src';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredCheckBox',
};

export const Default = () => {
  return (
    <Container>
      <WiredCheckBox
        checked={true}
        disabled={boolean('disabled', false)}
        onChange={action('onChange Fired')}
        color={color('color', 'currentColor')}
      />
    </Container>
  );
};
