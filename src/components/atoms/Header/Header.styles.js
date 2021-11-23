import styled from 'styled-components';

export const Wrapper = styled.h1`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.headerTitle};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;
