import styled from 'styled-components/native';
import { Text } from 'react-native';

export const PrimaryColor = styled(Text)`
    color: ${({theme}) => theme.colors.primary};
`;