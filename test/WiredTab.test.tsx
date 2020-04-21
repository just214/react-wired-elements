import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredTab } from '../src/WiredTab';

describe('WiredTab', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredTab className="clz" style={{ color: 'red' }} />, div);
    // noinspection CheckTagEmptyBody
    expect(div.innerHTML).toMatch(
      '<wired-tab class="clz" style="color: red; min-width: 200px;"></wired-tab>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
