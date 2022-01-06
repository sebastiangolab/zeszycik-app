import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;
