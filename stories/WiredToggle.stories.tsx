import React from 'react';
import { WiredToggle } from '../src';
import { color, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredToggle',
};

export const Default = () => {
  return (
    <Container>
      <WiredToggle
        checked={true}
        disabled={boolean('disabled', false)}
        onChange={action('onChange fired')}
        activeColor={color('color', 'rgb(63, 81, 181)')}
        inactiveColor={color('lineColor', 'gray')}
      />
    </Container>
  );
};
