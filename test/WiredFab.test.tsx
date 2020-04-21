import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredFab } from '../src/WiredFab';

describe('WiredFab', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredFab className="clz" style={{ color: 'red' }} />, div);
    expect(div.innerHTML).toMatch(
      '<wired-fab class="clz" style="color: red;">' +
        '<span><span class="material-icons" style="color: white;">favorite</span></span>' +
        '</wired-fab>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
