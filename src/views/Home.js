import React from 'react';
import { useSelector } from 'react-redux';
import { DebtElement } from 'components/organisms/DebtElement/DebtElement';

const Home = () => {
  const debts = useSelector((state) => state.debts);

  return (
    <>
      {/* Sortowanie */}
      {debts.map((debt) => (
        <DebtElement key={debt.id} {...debt} />
      ))}
      {/* Przycisk do dodawania */}
    </>
  );
};

export default Home;
