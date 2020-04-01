import React, { useState } from 'react';
import { WiredItem } from '../src';
import { text, color } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredItem',
};

export const Default = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Container>
      <WiredItem
        value="item1"
        selected={selected}
        color={color('color', 'black')}
        selectedBgColor={color('selectedBgColor', 'black')}
        selectedColor={color('selectedColor', 'white')}
        onClick={e => setSelected(!e)}
      >
        {text(
          'children',
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        )}
      </WiredItem>
    </Container>
  );
};
