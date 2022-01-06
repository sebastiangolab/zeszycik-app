import { Element } from 'components/atoms/Element/Element';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Wrapper = styled(Element)`
  display: flex;
  flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: ${({ isDescription }) => (isDescription ? '5px' : '13px')};
  border: ${Platform.OS === 'android' ? '1px solid #ddd' : 'none'};
`;

export const Date = styled.Text`
  width: 65%;
`;

export const Value = styled.Text`
  flex: 1;
`;

export const DescriptionLine = styled.View`
  width: 100%;
  margin-top: 15px;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 20px;
  font-weight: 300;
  padding-top: 10px;
`;
