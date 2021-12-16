import React from 'react';
import { Container, Wrapper, Icon, StyledText } from './AddDebtButton.styles';

export const AddDebtButton = () => {
  return (
    <Container>
      <Wrapper to="/addDebt">
        <>
          <Icon>+</Icon>
          <StyledText>Dodaj dłużnika</StyledText>
        </>
      </Wrapper>
    </Container>
  );
};
