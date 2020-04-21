import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCombo } from '../src/WiredCombo';

describe('WiredCombo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredCombo className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-combo class="clz" style="color: red;"></wired-combo>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
