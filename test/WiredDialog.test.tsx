import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredDialog } from '../src/WiredDialog';

describe('WiredDialog', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredDialog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
