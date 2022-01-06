import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Wrapper = styled(Button)`
    width: auto;
    height: 44px
    font-size: 100px;
    position: absolute;
    min-width: 40px;
    width: 40px;
    text-align: left;
    left: 0;
    top: ${Platform.OS === 'android' ? '31px' : '29px'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
`;
