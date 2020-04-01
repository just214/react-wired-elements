import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredItem } from '../src/WiredItem';

describe('WiredItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
