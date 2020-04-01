import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredTextArea } from '../src/WiredTextArea';

describe('WiredTextArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredTextArea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
