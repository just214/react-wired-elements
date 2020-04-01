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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
          voluptatum consectetur sunt quia. Esse ab sit quod pariatur
          repudiandae?
        </WiredTab>
        <WiredTab name="Two" label="Two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum
          numquam error repudiandae fugiat, sint tempora incidunt ipsa suscipit?
          Ipsam dolor facilis magnam blanditiis. Beatae tempore aperiam ad porro
          placeat, excepturi deleniti. Iure eius dolorum blanditiis saepe illo
          voluptates ipsum.
        </WiredTab>
        <WiredTab name="Three" label="Three">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi
          sunt itaque, obcaecati nobis dolorum?
        </WiredTab>
      </WiredTabs>
    </Container>
  );
};
