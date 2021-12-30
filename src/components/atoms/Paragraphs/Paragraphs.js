import styled from 'styled-components/native';

export const Paragraph = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 23px;
  margin-bottom: 15px;
`;

export const LastParagraph = styled(Paragraph)`
  margin-bottom: 0;
`;