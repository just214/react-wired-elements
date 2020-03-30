import React from 'react';
import { WiredVideo } from '../src';
import { boolean, color, text } from '@storybook/addon-knobs';

export default {
  title: 'WiredVideo',
};

export const Default = () => (
  <WiredVideo
    src={text(
      'src',
      'https://res.cloudinary.com/gojutin/video/upload/w_400/v1585407774/cat-video.mp4'
    )}
    autoPlay={boolean('autoPlay', false)}
    loop={boolean('loop', false)}
    muted={boolean('muted', false)}
    playsInline={boolean('playsInline', false)}
    color={color('color', 'black')}
  />
);
