import styled from 'styled-components';
import { Text } from 'react-native';

export const PrimaryColor = styled(Text)`
    color: ${({theme}) => theme.colors.primary};
`;