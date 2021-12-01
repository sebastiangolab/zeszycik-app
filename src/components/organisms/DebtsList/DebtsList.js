import React from 'react';
import { Wrapper } from './DebtsList.styles';
import { useSelector } from 'react-redux';
import { DebtElement } from 'components/molecules/DebtElement/DebtElement';

export const DebtsList = () => {
  const debts = useSelector((state) => state.debts);

  return (
    <Wrapper>
      {debts.map((debt) => (
        <DebtElement key={debt.id} {...debt} />
      ))}
    </Wrapper>
  );
};
