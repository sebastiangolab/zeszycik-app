import styled from 'styled-components/native';
import { Element } from 'components/atoms/Element/Element';

export const Wrapper = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const DebtName = styled.Text`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const DebtValue = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.m};
`;