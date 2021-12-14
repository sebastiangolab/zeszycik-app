import styled from "styled-components/native";
import { TextInput } from "react-native";

export const StyledInput = styled(TextInput)`
  padding: 13px 14px 13px 14px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border: ${({ isFocus, theme }) => (isFocus ? `1px solid ${theme.colors.primary}` : 'none')};
`;