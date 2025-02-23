import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, DebtName, DebtValue } from './DebtElement.styles';
import { DebtOptions } from 'components/molecules/DebtOptions/DebtOptions';
import ChevronUpIcon from '../../../assets/icons/chevron-up.svg';
import ChevronDownIcon from '../../../assets/icons/chevron-down.svg';

export const DebtElement = ({ id, name, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <TouchableOpacity onPress={handleToggleIsOpen}>
      <Wrapper>
        <DebtName>{name}</DebtName>
        <DebtValue>{value} zł</DebtValue>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        {isOpen && <DebtOptions debtId={id} />}
      </Wrapper>
    </TouchableOpacity>
  );
};
