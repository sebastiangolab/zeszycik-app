import React from 'react';
import { DebtsList } from 'components/organisms/DebtsList/DebtsList';
import { SortDebtsSelect } from 'components/organisms/SortDebtsSelect/SortDebtsSelect';

const Home = () => {
  return (
    <>
      <SortDebtsSelect />
      <DebtsList />
    </>
  );
};

export default Home;
