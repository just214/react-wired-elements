import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSearchInput } from '../src/WiredSearchInput';

describe('WiredSearchInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredSearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
