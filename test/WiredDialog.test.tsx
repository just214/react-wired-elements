import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredDialog } from '../src/WiredDialog';

describe('WiredDialog', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <WiredDialog className="clz" style={{ color: 'red' }} />,
      div
    );
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-dialog class="clz" style="color: red;"></wired-dialog>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
