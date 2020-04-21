import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSearchInput } from '../src/WiredSearchInput';

describe('WiredSearchInput', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredSearchInput className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-search-input class="clz" style="color: red;"></wired-search-input>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
