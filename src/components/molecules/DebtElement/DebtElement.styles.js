import styled from 'styled-components';
import { Element } from 'components/atoms/Element/Element';
import { Platform } from 'react-native';
import { Text } from 'react-native';

export const Wrapper = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: ${Platform.OS === 'android' ? '1px solid #ddd' : 'none'};
`;

export const DebtName = styled(Text)`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const DebtValue = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;