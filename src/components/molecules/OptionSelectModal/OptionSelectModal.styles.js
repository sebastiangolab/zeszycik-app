import styled from 'styled-components/native';
import { TouchableHighlight, Text } from 'react-native';

export const ModalButton = styled(TouchableHighlight)`
  background: transparent;
  text-align: center;
  padding: 16px 30px;
  padding-bottom: 16px;
  border-bottom-width: ${({ last }) => (last ? '0' : '1px')};
  border-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const ModalText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.modalOption};
  line-height: 22px;
  width: 100%;
  text-align: center;
`;
