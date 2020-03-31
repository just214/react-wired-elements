import React from 'react';
import { WiredCalendar } from '../src';
import { text, select, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredCalendar',
};

export const Default = () => (
  <Container>
    <WiredCalendar
      elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
      bgColor={color('bgColor', 'white')}
      lineColor={color('lineColor', 'black')}
      selectedColor={color('selectedColor', 'red')}
      locale={text('locale', 'en')}
      firstDate={text('firstDate', '')}
      lastDate={text('lastDate', '')}
      selectedDate={text('selectedDate', '')}
      initials={boolean('initials', false)}
      dimmedColor={color('dimmedColor', 'gray')}
      onSelect={action('onSelect Fired')}
      disabled={boolean('disabled', false)}
    />
  </Container>
);
