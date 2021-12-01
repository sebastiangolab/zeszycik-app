import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: flex-end;
  padding-bottom: 16px;
  padding-top: 10px;
`;

export const Wrapper = styled.TouchableOpacity`
  width: 185px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 13px 9px 10px 9px;
  margin: 0 12px;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Icon = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.AddDebtIcon};
  margin-right: 10px;
  padding-bottom: 3px;
`;