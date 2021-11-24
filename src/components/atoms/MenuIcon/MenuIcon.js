import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const MenuIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.menuIcon};
`;
