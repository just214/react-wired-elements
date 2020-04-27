import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredRadioGroup } from '../src/WiredRadioGroup';

describe('WiredRadioGroup', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredRadioGroup className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-radio-group class="clz" style="color: red;"></wired-radio-group>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
