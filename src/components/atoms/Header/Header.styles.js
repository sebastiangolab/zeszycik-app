import styled from 'styled-components';
import { Text } from 'react-native';

export const Wrapper = styled(Text)`
  width: 100%;
  padding: 11px 15px;
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.headerTitle};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;
