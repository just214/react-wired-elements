import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredRadioGroup } from '../src';

describe('WiredRadioGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredRadioGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
