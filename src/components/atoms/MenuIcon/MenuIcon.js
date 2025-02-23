import styled from 'styled-components/native';
import { Feather as Icon } from '@expo/vector-icons';

export const MenuIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.menuIcon};
`;
