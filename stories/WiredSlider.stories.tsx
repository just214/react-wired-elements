import React, { useState } from 'react';
import { WiredSlider } from '../src';
import { color, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

export default {
  title: 'WiredSlider',
};

export const Default = () => {
  const [value, setValue] = useState(30);
  function handleChange(e) {
    setValue(e.target.value);
    action('onChange Fired', e);
  }
  return (
    <Container>
      <WiredSlider
        value={value}
        min={number('min', 0, options)}
        max={number('max', 100, options)}
        knobZeroColor={color('knobZeroColor', 'black')}
        knobColor={color('knobColor', 'rgba(0, 0, 200, 0.8)')}
        barColor={color('barColor', 'currentColor')}
        onChange={handleChange}
      />
    </Container>
  );
};
