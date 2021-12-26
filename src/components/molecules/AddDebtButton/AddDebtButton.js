import React from 'react';
import { Container, Wrapper, Icon, StyledText } from './AddDebtButton.styles';
import { theme } from 'assets/styles/theme';

export const AddDebtButton = () => {
  return (
    <Container>
      <Wrapper to="/addDebt" underlayColor={theme.colors.primary}>
        <>
          <Icon>+</Icon>
          <StyledText>Dodaj dłużnika</StyledText>
        </>
      </Wrapper>
    </Container>
  );
};
