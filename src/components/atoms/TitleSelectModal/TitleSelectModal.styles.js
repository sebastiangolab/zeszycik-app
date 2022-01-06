import styled from 'styled-components/native';

export const TitleContainer = styled.View`
  background: transparent;
  padding-top: 25px;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const WrapperText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.modalTitle};
  width: 100%;
  text-align: center;
  font-weight: 500;
`;
