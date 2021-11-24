import React from 'react';
import { Wrapper, DebtButtonText } from './Button.styles';

export const Button = ({ children, ...props }) => (
  <Wrapper {...props}>
    <DebtButtonText>{children}</DebtButtonText>
  </Wrapper>
);
