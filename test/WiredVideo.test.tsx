import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredVideo } from '../src/WiredVideo';

describe('WiredVideo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredVideo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
