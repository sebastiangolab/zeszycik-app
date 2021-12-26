import React from 'react';
import { Wrapper, StyledText } from './MarkSwitchButton.styles';

export const MarkSwitchButton = ({ mark, setMark }) => {
  const handleOnClick = () => (mark === '+' ? setMark('mark', '-') : setMark('mark', '+'));

  return (
    <Wrapper onPress={handleOnClick} isCustomStyledText={true}>
      <StyledText>{mark}</StyledText>
    </Wrapper>
  );
};
