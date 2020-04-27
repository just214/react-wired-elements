import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredItem } from '../src/WiredItem';

describe('WiredItem', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredItem className="clz" style={{ textAlign: 'center' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-item class="clz" style="text-align: center; color: black;"></wired-item>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with selected colors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredItem
        selectedColor="red"
        selectedBgColor="black"
        selected
        className="clz"
      />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-item class="clz" style="background-color: black; color: red;"></wired-item>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
