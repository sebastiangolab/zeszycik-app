import styled from 'styled-components/native';
import { Text } from 'react-native';

export const ErrorText = styled(Text)`
    color: ${({theme}) => theme.colors.error};
    font-size: ${({theme}) => theme.fontSize.s};
    margin-top: 7px;
`;