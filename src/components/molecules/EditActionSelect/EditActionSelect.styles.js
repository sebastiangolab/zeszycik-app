import styled from 'styled-components/native';
import { Platform, TouchableHighlight, Text } from 'react-native';

export const EditSelectButton = styled(TouchableHighlight)`
  padding: 13px 14px;
  padding-left: 14px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border: ${Platform.OS === 'android' ? '1px solid #ddd' : 'none'};
`;

export const EditButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
`;