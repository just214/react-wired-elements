import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCard } from '../src';

describe('WiredCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
