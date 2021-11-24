import React from 'react';
import { Wrapper } from './DebtOptions.styles';
import { Button } from 'components/atoms/Button/Button';

export const DebtOptions = () => {
  return (
    <Wrapper>
      <Button>Szczegóły</Button>
      <Button>Edytuj</Button>
      <Button>Usuń</Button>
    </Wrapper>
  );
};
