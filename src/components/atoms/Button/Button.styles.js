import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const DebtButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  min-width: 80px;
  padding: 10px;
  text-align: center;
`;