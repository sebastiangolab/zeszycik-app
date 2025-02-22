import styled from 'styled-components';
import { Text } from 'react-native';

export const Title = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
`;

export const Value = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;