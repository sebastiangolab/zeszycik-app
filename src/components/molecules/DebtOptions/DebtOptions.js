import React from 'react';
import { Wrapper } from './DebtOptions.styles';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-native';
import { theme } from 'assets/styles/theme';

export const DebtOptions = ({ debtId }) => {
  return (
    <Wrapper>
      <Button as={Link} to={`/detailDebt/${debtId}`} underlayColor={theme.colors.primary}>
        Szczegóły
      </Button>
      <Button as={Link} to={`/editDebt/${debtId}`} underlayColor={theme.colors.primary}>
        Edytuj
      </Button>
      <Button as={Link} to={`/deleteDebt/${debtId}`} underlayColor={theme.colors.primary}>
        Usuń
      </Button>
    </Wrapper>
  );
};
