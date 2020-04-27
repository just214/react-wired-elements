import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredVideo } from '../src/WiredVideo';

describe('WiredVideo', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredVideo className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-video class="clz" style="color: red;"></wired-video>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
