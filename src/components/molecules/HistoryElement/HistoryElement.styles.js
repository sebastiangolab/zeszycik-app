import { Element } from 'components/atoms/Element/Element';
import styled from 'styled-components/native';

export const Wrapper = styled(Element)`
    display: flex;
    flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Date = styled.Text`
    width: 65%;
`;

export const Value = styled.Text`
    flex: 1;
`;