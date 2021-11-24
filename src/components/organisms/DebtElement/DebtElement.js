import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Wrapper, DebtName, DebtValue } from './DebtElement.styles';
import { DebtOptions } from 'components/molecules/DebtOptions/DebtOptions';

export const DebtElement = ({ id, name, value }) => {
  return (
    <TouchableOpacity>
      <Wrapper>
        <DebtName>{name}</DebtName>
        <DebtValue>{value} zł</DebtValue>
        <Text>^</Text>
        {true && <DebtOptions />}
      </Wrapper>
    </TouchableOpacity>
  );
};
