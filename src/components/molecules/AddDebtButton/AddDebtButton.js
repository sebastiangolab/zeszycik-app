import React from 'react';
import {
  Container,
  Wrapper,
  Icon,
  StyledText,
} from './AddDebtButton.styles';
import { useNavigate } from 'react-router-dom';

export const AddDebtButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/addDebt');
  };

  return (
    <Container>
      <Wrapper onPress={handleOnClick}>
        <Icon>+</Icon>
        <StyledText>Dodaj dłużnika</StyledText>
      </Wrapper>
    </Container>
  );
};
