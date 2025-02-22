import styled from 'styled-components';
import { Platform, View } from 'react-native';

export const Element = styled(View)`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  padding: 15px 15px;
  padding-bottom: 13px;
  margin-bottom: 18px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border: ${Platform.OS === 'android' ? '1px solid #ddd' : 'none'};
`;
