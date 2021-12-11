import React from 'react';
import { Element } from 'components/atoms/Element/Element';
import { Title, Value } from './Statistics.styles';
import { useSelector } from 'react-redux';
import {
  getTotalValue,
  getDebtorsCount,
  getHighestDebt,
  getLowestDebt,
} from 'helpers/StatisticsHelpers';

const Statistics = () => {
  const debts = useSelector((state) => state.debts);

  return (
    <>
      <Element>
        <Title>Aktualnie pożyczasz:</Title>
        <Value>{getTotalValue(debts)}</Value>
      </Element>
      <Element>
        <Title>Liczba dłużników:</Title>
        <Value>{getDebtorsCount(debts)}</Value>
      </Element>
      <Element>
        <Title>Najwięcej pożycza:</Title>
        <Value>{getHighestDebt(debts)}</Value>
      </Element>
      <Element>
        <Title>Najmniej pożycza:</Title>
        <Value>{getLowestDebt(debts)}</Value>
      </Element>
    </>
  );
};

export default Statistics;
