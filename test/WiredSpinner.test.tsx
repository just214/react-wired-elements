import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSpinner } from '../src/WiredSpinner';

describe('WiredSpinner', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredSpinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
