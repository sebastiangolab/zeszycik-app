import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isLink, theme }) => isLink ? theme.colors.primary : theme.colors.black};
  margin-top: ${({isLink}) => isLink ? '0' : '10px'};
`;

