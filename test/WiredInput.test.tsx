import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredInput } from '../src/WiredInput';

describe('WiredInput', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredInput className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-input class="clz" style="color: red;"></wired-input>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
