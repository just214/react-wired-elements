import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import TextareaAutosize from 'react-textarea-autosize';
import { Container } from '../stories/Container';

addDecorator(withKnobs);
addDecorator(
  withInfo({ inline: true, header: true, propTablesExclude: [Container] })
);
