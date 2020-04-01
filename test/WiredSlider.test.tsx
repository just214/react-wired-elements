import React from 'react';
import * as ReactDOM from 'react-dom';
import { WiredSlider } from '../src/WiredSlider';

describe('WiredSlider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WiredSlider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
