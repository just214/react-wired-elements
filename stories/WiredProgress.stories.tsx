import React from 'react';
import { WiredProgress } from '../src';
import { boolean, color, number } from '@storybook/addon-knobs';
import { Container } from './Container';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

export default {
  title: 'WiredProgress',
};

export const Default = () => (
  <Container>
    <WiredProgress
      value={number('value', 20, options)}
      min={number('min', 1, options)}
      max={number('max', 100, options)}
      showPercentage={boolean('showPercentage', true)}
      labelColor={color('labelColor', 'black')}
      labelBgColor={color('labelBgColor', 'rgba(255,255,255,0.9)')}
      progressBarColor={color('progressBarColor', 'rgba(0, 0, 200, 0.8)')}
      fontSize={number('fontSize', 14)}
    />
  </Container>
);

export const AsLoading = () => {
  const [value, setValue] = React.useState(0);

  let interval;

  function handleStartLoading() {
    interval = setInterval(() => {
      setValue(v => {
        if (v === 99) {
          clearInterval(interval);
          setValue(0);
        }
        return v + 1;
      });
    }, 100);
  }

  return (
    <>
      <WiredProgress
        value={value}
        showPercentage={boolean('showPercentage', true)}
        labelColor={color('labelColor', '#000')}
        labelBgColor={color('labelBgColor', 'rgba(255,255,255,0.9)')}
        progressBarColor={color('progressBarColor', 'rgba(0, 0, 200, 0.8)')}
        fontSize={number('fontSize', 14)}
      />
      <div>
        <button onClick={handleStartLoading}>Start Loading</button>
      </div>
    </>
  );
};
