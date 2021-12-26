import React from 'react';
import { Text } from 'react-native';
import { Wrapper, StyledText } from './Button.styles';

export const Button = ({ children, isCustomStyledText = false, ...props }) => (
  <Wrapper {...props}>
    {isCustomStyledText 
      ? <Text>{children}</Text>
      : <StyledText>{children}</StyledText>
    }
  </Wrapper>
);
