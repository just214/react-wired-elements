import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredLink } from '../src';

describe('WiredLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredLink />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
