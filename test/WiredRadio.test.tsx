import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredRadio } from '../src/WiredRadio';

describe('WiredRadio', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredRadio className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-radio class="clz" style="color: red;"></wired-radio>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
