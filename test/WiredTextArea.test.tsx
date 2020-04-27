import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredTextArea } from '../src/WiredTextArea';

describe('WiredTextArea', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredTextArea className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-textarea class="clz" style="color: red;"></wired-textarea>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
