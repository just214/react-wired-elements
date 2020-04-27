import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSpinner } from '../src/WiredSpinner';

describe('WiredSpinner', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredSpinner className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-spinner class="clz" style="color: red;"></wired-spinner>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
