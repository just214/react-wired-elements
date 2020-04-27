import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredImage } from '../src/WiredImage';

describe('WiredImage', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredImage className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-image class="clz" style="color: red;"></wired-image>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
