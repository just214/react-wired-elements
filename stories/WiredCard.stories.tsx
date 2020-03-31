import React from 'react';
import { WiredCard } from '../src';
import { text, select, color } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredCard',
};

const initialChildrenText = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias
dolorem, aliquam quisquam cupiditate sequi temporibus aut animi minima,
ullam est, perspiciatis atque laborum natus cumque? Fugit corporis
similique quo.
`;

export const Default = () => {
  return (
    <Container>
      <WiredCard
        elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
        fill={color('fill', '')}
      >
        {text('children', initialChildrenText)}
      </WiredCard>
    </Container>
  );
};
