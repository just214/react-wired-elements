import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredCard } from '../src/WiredCard';

describe('WiredCard', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredCard className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-card class="clz" style="color: red;"></wired-card>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
