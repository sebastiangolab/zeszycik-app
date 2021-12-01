import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, DebtName, DebtValue } from './DebtElement.styles';
import { DebtOptions } from 'components/molecules/DebtOptions/DebtOptions';
import Icon from 'react-native-vector-icons/AntDesign';

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
        {isOpen ? <Icon name="up" /> : <Icon name="down" />}
        {isOpen && <DebtOptions debtId={id} />}
      </Wrapper>
    </TouchableOpacity>
  );
};
