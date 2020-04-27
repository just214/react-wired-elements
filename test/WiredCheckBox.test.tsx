import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCheckBox } from '../src/WiredCheckBox';

describe('WiredCheckBox', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredCheckBox className="clz" style={{ color: 'red' }} />,
      div
    );
    expect(div.innerHTML).toMatch(
      '<wired-checkbox class="clz" style="color: red;"></wired-checkbox>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
