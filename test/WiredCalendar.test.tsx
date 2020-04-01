import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCalendar } from '../src/WiredCalendar';

describe('WiredCalendar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredCalendar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
