import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredImage } from '../src';

describe('WiredImage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredImage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
