import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredToggle } from '../src';

describe('WiredToggle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredToggle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
