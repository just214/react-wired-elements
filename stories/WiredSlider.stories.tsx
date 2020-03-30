import React from 'react';
import { WiredSlider } from '../src';
import { color, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

export default {
  title: 'WiredSlider',
};

export const Default = () => (
  <WiredSlider
    value={0}
    min={number('min', 0, options)}
    max={number('max', 100, options)}
    knobRadius={number('knobRadius', 10)}
    knobZeroColor={color('knobZeroColor', 'black')}
    knobColor={color('knobColor', 'rgba(0, 0, 200, 0.8)')}
    barColor={color('barColor', 'currentColor')}
    onChange={action('onChange Fired')}
  />
);
