import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredRadio } from '../src';

describe('WiredRadio', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredRadio />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
