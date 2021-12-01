import React from 'react';
import { Wrapper, StyledText } from './Button.styles';

export const Button = ({ children, ...props }) => (
  <Wrapper {...props}>
    <StyledText>{children}</StyledText>
  </Wrapper>
);
