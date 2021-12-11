import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const pickerStyle = {
    inputIOS: {
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 17,
        borderRadius: 5,
        backgroundColor: '#E2395F',
        color: '#fff',
        fontSize: 16,
    },
  
    inputAndroid: {
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 17,
        borderRadius: 5,
        backgroundColor: '#E2395F',
        color: '#fff',
        fontSize: 16,
    },
  
    iconContainer: {
        top: 18,
        right: 12,
    },
}

export const PickerIcon = styled(Icon)`
    color: #fff;
`;