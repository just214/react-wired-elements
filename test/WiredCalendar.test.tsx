import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCalendar } from '../src';

describe('WiredCalendar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredCalendar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
