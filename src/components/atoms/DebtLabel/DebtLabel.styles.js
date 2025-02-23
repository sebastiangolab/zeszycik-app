import styled from 'styled-components/native';
import { Text } from "react-native";

export const DebtorName = styled(Text)`
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.l};
`;

export const DebtValue = styled(Text)`
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.m};
    color: ${({theme}) => theme.colors.primary};
    margin-top: 12px;
`;