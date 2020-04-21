import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredListBox } from '../src/WiredListBox';

describe('WiredListBox', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredListBox className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-listbox class="clz" style="color: red;"></wired-listbox>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
