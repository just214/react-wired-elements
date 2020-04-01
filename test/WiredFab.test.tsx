import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredFab } from '../src';

describe('WiredFab', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredFab />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
