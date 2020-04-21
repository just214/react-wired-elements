import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSlider } from '../src/WiredSlider';

describe('WiredSlider', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredSlider className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-slider class="clz" style="color: red;"></wired-slider>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
