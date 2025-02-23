import React from 'react';
import { useParams } from 'react-router-native';
import { useSelector } from 'react-redux';
import { HistoryElement } from 'components/molecules/HistoryElement/HistoryElement';
import { DebtLabel } from 'components/atoms/DebtLabel/DebtLabel';

const DetailDebt = () => {
  const { id } = useParams();
  const selectDebt = useSelector((state) => state.debts.filter((debt) => debt.id == id)[0]);

  return (
    <>
      <DebtLabel debtorName={selectDebt.name} debtValue={selectDebt.value} />
      {selectDebt.history.map((element) => <HistoryElement key={element.id} {...element} />)}
    </>
  );
};

export default DetailDebt;
