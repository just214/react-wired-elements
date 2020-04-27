import React, { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import { WiredButton } from '../src/WiredButton';

describe('WiredButton', () => {
  it('renders with base props', () => {
    const div = document.createElement('div');
    let button: ReactElement = (
      <WiredButton className="clz" style={{ color: 'red' }} />
    );
    ReactDOM.render(button, div);
    expect(div.innerHTML).toMatch(
      '<wired-button class="clz" style="color: red;">Click Me!</wired-button>'
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
