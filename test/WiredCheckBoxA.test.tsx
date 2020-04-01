import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCheckBox } from '../src/WiredCheckBoxA';

describe('WiredCheckBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredCheckBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
