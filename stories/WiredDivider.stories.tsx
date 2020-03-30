import React from 'react';
import { WiredDivider } from '../src';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'WiredDivider',
};

export const Default = () => (
  <div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
      animi maxime enim.
    </p>
    <WiredDivider elevation={select('elevation', [1, 2, 3, 4, 5], 1)} />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
      voluptatibus ullam neque.
    </p>
  </div>
);
