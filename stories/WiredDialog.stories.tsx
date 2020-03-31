import React from 'react';
import { WiredDialog, WiredButton } from '../src';
import { text, select, number } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredDialog',
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);
  function toggleOpen() {
    setOpen(o => !o);
  }
  return (
    <Container>
      <WiredButton elevation={2} onClick={toggleOpen}>
        Show Dialog
      </WiredButton>
      <WiredDialog
        elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
        open={open}
        zIndex={number('zIndex', 1)}
      >
        <div style={{ textAlign: 'center' }}>
          <div>{text('children', 'Custom Dialog Text')}</div>
          <br />
          <div>
            <WiredButton onClick={toggleOpen}>Close</WiredButton>
          </div>
        </div>
      </WiredDialog>
    </Container>
  );
};
