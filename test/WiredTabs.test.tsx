import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredTabs } from '../src/WiredTabs';

describe('WiredTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
