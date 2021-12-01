import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
`;

export const ThanksText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.black};
  line-height: 20px;
`;