import styled from 'styled-components';
import { Link } from 'react-router-native';
import { Text, View } from 'react-native';


export const Container = styled(View)`
  display: flex;
  align-items: flex-end;
  padding-bottom: 16px;
  padding-top: 10px;
`;

export const Wrapper = styled(Link)`
  min-width: 185px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 13px 28px 10px 28px;
  margin: 0 12px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.addDebtButton};
`;

export const Icon = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.AddDebtIcon};
  margin-right: 10px;
  padding-bottom: 3px;
`;