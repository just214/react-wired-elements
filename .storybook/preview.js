import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(withInfo({ inline: true, header: false }));
addDecorator(withPadding);

function withPadding(storyFn) {
  return <div style={{ margin: '20px' }}>{storyFn()}</div>;
}
