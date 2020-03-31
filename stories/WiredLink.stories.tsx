import React from 'react';
import { WiredLink } from '../src';
import { text, select, color } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredLink',
};

const targetOptions = [
  '_blank',
  '_self',
  '_parent',
  '_top',
  'framename',
] as const;
type Target = typeof targetOptions[number];

export const Default = () => (
  <Container>
    <WiredLink
      elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
      href={text('href', 'https://wiredjs.com')}
      target={select('target', targetOptions, '_blank') as Target}
      color={color('color', 'black')}
      lineColor={color('lineColor', 'black')}
    >
      {text('children', 'My Awesome Link')}
    </WiredLink>
  </Container>
);
