import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredIconButton } from '../src';

describe('WiredIconButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredIconButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
