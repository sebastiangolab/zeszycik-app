import styled, { css } from 'styled-components/native';
import { Element } from 'components/atoms/Element/Element';
import { View, Platform } from 'react-native';

export const ModalCenter = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled(View)`
  background-color: ${({ theme }) => theme.colors.modalBackground};
  opacity: 0.4;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const ModalContent = styled(Element)`
  padding: 0;
  border-radius: 5px;
  margin-bottom: 15%;
  min-width: 75%;
  max-width: 85%;

  ${Platform.OS === "web" ? css`
    min-width: auto;
    width: 380px;
    max-width: 90vw;
  ` : null};
`;
