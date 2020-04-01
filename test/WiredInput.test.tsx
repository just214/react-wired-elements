import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredInput } from '../src/WiredInput';

describe('WiredInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
