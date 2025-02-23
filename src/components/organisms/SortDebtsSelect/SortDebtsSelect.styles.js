import styled from 'styled-components/native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { TouchableHighlight, Text } from 'react-native';

export const SortButton = styled(TouchableHighlight)`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 17px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SortButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.modalOption};
`;

export const SortButtonIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
`;
