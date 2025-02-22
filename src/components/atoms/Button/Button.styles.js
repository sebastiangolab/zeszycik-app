import styled from 'styled-components';
import { TouchableOpacity, Text } from "react-native";

export const Wrapper = styled(TouchableOpacity)`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
`;

export const StyledText = styled(Text)`
  color: #fff;
  font-size: 13px;
  min-width: 80px;
  padding: 0 10px;
  text-align: center;
`;