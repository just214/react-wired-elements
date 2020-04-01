import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCombo } from '../src/WiredCombo';

describe('WiredCombo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredCombo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
