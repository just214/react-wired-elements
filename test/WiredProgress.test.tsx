import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredProgress } from '../src/WiredProgress';

describe('WiredProgress', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredProgress className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-progress class="clz" style="color: red;"></wired-progress>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
