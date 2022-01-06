import React, { useContext } from 'react';
import { Wrapper } from './DebtsList.styles';
import { useSelector } from 'react-redux';
import { DebtElement } from 'components/molecules/DebtElement/DebtElement';
import { SortDebtsContext } from 'providers/SortDebtsProvider';
import { sortDebts } from 'helpers/sortDebts';
import { checkSearchPhrase } from 'helpers/checkSearchPhrase';
import PropTypes from 'prop-types';
import { CenterText } from 'components/atoms/CenterText/CenterText';

export const DebtsList = ({ searchPhrase = '' }) => {
  const debts = useSelector((state) => state.debts);
  const { sortType } = useContext(SortDebtsContext);

  const sortedDebts = sortDebts(debts, sortType);

  return (
    <Wrapper>
      {sortedDebts.map((debt) => {
        if (checkSearchPhrase(debt.name, searchPhrase))
          return <DebtElement key={debt.id} {...debt} />;
      })}
      {sortedDebts.length === 0 &&
        <CenterText>Nie masz aktualnie żadnych dłużników</CenterText>
      }
    </Wrapper>
  );
};

DebtsList.propTypes = {
  searchPhrase: PropTypes.string,
}
