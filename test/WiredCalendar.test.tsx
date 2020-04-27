import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCalendar } from '../src/WiredCalendar';

describe('WiredCalendar', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredCalendar className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-calendar class="clz" style="color: red;"></wired-calendar>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
