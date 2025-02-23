import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const Wrapper = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  position: relative;
`;
