import React, { useContext, useState } from 'react';
import { SortDebtsContext } from 'providers/SortDebtsProvider';
import { SortButton, SortButtonText, SortButtonIcon } from './SortDebtsSelect.styles';
import { SelectModal } from 'components/organisms/SelectModal/SelectModal';
import { getSortName } from 'helpers/getSortName';
import { theme } from 'assets/styles/theme';

export const SortDebtsSelect = () => {
  const { sortType, setSortType } = useContext(SortDebtsContext);
  const [modalVisible, setModalVisible] = useState(false);

  const sortOptions = [
    {
      text: 'Sortowanie Alfabetyczne',
      value: 'alphabetically',
    },
    {
      text: 'Sortowanie wg. długu rosnąco',
      value: 'ascending',
    },
    {
      text: 'Sortowanie wg. długu malejąco',
      value: 'descending',
    },
  ];

  const handleSelectOption = (sortValue) => {
    setSortType(sortValue);
    setModalVisible(false);
  };

  return (
    <>
      <SortButton
        onPress={() => setModalVisible(true)}
        underlayColor={theme.colors.primary}
        activeOpacity={0.6}>
        <>
          <SortButtonText>{getSortName(sortType)}</SortButtonText>
          <SortButtonIcon name="down" />
        </>
      </SortButton>
      <SelectModal
        isOpen={modalVisible}
        handleSelectOption={handleSelectOption}
        options={sortOptions}
      />
    </>
  );
};
