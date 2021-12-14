import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Element } from 'components/atoms/Element/Element';
import { DebtorName, DebtValue } from './DetailDebt.styles';
import { HistoryElement } from 'components/molecules/HistoryElement/HistoryElement';

const DetailDebt = () => {
  const { id } = useParams();
  const selectDebt = useSelector((state) => state.debts.filter((debt) => debt.id == id)[0]);

  return (
    <>
      <Element>
        <DebtorName>{selectDebt.name}</DebtorName>
        <DebtValue>{selectDebt.value} zł</DebtValue>
      </Element>
      {selectDebt.history.map((element) => <HistoryElement key={element.id} {...element} />)}
    </>
  );
};

export default DetailDebt;
