import React from 'react';
import { DebtsList } from 'components/organisms/DebtsList/DebtsList';
import { SortDebtsSelect } from 'components/molecules/SortDebtsSelect/SortDebtsSelect';

const Home = () => {
  return (
    <>
      <SortDebtsSelect />
      <DebtsList />
    </>
  );
};

export default Home;
