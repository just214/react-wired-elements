import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredLink } from '../src/WiredLink';

describe('WiredLink', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredLink className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-link class="clz" style="color: red;"></wired-link>'
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
