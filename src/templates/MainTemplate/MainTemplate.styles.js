import styled from 'styled-components/native';

export const BackgroundApp = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px 12px;
`;
