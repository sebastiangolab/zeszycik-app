import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const pickerStyle = {
  inputIOS: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  inputAndroid: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  iconContainer: {
    top: 18,
    right: 12,
  },
};

export const PickerIcon = styled(Icon)`
  color: #333;
`;
