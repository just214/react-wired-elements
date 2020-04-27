import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredIconButton } from '../src/WiredIconButton';

describe('WiredIconButton', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredIconButton className="clz" style={{ color: 'red' }} />,
      div
    );
    expect(div.innerHTML).toMatch(
      '<wired-icon-button class="clz" style="color: red;">' +
        '<div style="height: 24px; width: 24px;"><span class="material-icons" style="font-size: 24px; color: rgb(1, 135, 134);">favorite</span></div>' +
        '</wired-icon-button>'
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
