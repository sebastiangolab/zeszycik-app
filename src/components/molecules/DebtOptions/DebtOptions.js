import React from 'react';
import { Wrapper } from './DebtOptions.styles';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-native';

export const DebtOptions = ({ debtId }) => {
  return (
    <Wrapper>
      <Button as={Link} to={`/detailDebt/${debtId}`}>
        Szczegóły
      </Button>
      <Button as={Link} to={`/editDebt/${debtId}`}>
        Edytuj
      </Button>
      <Button as={Link} to={`/deleteDebt/${debtId}`}>
        Usuń
      </Button>
    </Wrapper>
  );
};
