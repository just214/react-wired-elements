import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredToggle } from '../src/WiredToggle';

describe('WiredToggle', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredToggle className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-toggle class="clz" style="color: red;"></wired-toggle>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
