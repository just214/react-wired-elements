import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredDivider } from '../src';

describe('WiredDivider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredDivider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
