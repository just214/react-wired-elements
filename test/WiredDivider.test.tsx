import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredDivider } from '../src/WiredDivider';

describe('WiredDivider', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredDivider className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-divider class="clz" style="color: red;"></wired-divider>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
