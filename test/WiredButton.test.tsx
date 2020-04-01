import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredButton } from '../src/WiredButton';

describe('WiredButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
