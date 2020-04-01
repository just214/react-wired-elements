import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredProgress } from '../src/WiredProgress';

describe('WiredProgress', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredProgress />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
