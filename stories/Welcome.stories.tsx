import React from 'react';
// @ts-ignore
import Readme from './Welcome.md';

export default {
  title: 'Welcome!',
  parameters: {
    info: {
      disable: true,
    },
  },
};

export const README = () => (
  <div
    style={{
      fontFamily: 'sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.5,
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem',
    }}
    dangerouslySetInnerHTML={{ __html: Readme }}
  />
);
