import React from 'react';
import { WiredTabs, WiredTab } from '../src';
import { color } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredTabs',
  parameters: {
    info: {
      text: 'Hello',
    },
  },
};

export const Default = () => {
  return (
    <Container>
      <WiredTabs
        initialSelected="One"
        selectedBgColor={color('selectedBgColor', 'black')}
        selectedColor={color('selectedColor', 'white')}
      >
        <WiredTab name="One" label="One">
          Item 1
        </WiredTab>
        <WiredTab name="Two" label="Two">
          Item 2
        </WiredTab>
        <WiredTab name="Three" label="Three">
          Item 3
        </WiredTab>
      </WiredTabs>
    </Container>
  );
};
