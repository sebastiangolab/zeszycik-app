import React, { useState } from 'react';
import { SearchForm } from 'components/organisms/SearchForm/SearchForm';
import { DebtsList } from 'components/organisms/DebtsList/DebtsList';

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <>
      <SearchForm setSearchPhrase={setSearchPhrase} />
      <DebtsList searchPhrase={searchPhrase} />
    </>
  );
};

export default Search;
