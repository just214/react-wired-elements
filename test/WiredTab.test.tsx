import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredTab } from '../src/WiredTab';

describe('WiredTab', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredTab />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
