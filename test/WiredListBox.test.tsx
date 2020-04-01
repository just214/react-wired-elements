import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredListBox } from '../src/WiredListBox';

describe('WiredListBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredListBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
