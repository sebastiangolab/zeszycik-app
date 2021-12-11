import React, { useContext } from 'react';
import { Wrapper } from './DebtsList.styles';
import { useSelector } from 'react-redux';
import { DebtElement } from 'components/molecules/DebtElement/DebtElement';
import { SortDebtsContext } from 'providers/SortDebtsProvider';
import { sortDebts } from 'helpers/sortDebts';

export const DebtsList = () => {
  const debts = useSelector((state) => state.debts);
  const { sortType } = useContext(SortDebtsContext);

  const sortedDebts = sortDebts(debts, sortType);

  return (
    <Wrapper>
      {sortedDebts.map((debt) => (
        <DebtElement key={debt.id} {...debt} />
      ))}
    </Wrapper>
  );
};
