import React from 'react';
import { WiredTabs, WiredTab } from '../src';
import { color } from '@storybook/addon-knobs';

export default {
  title: 'WiredTabs',
};

export const Default = () => (
  <WiredTabs
    selected="One"
    selectedBgColor={color('selectedBgColor', 'currentColor')}
    selectedColor={color('selectedColor', 'currentColor')}
  >
    <WiredTab name="One" label="One">
      Item 2
    </WiredTab>
    <WiredTab name="Two" label="Two">
      Item 2
    </WiredTab>
    <WiredTab name="Three" label="Three">
      Item 3
    </WiredTab>
  </WiredTabs>
);
