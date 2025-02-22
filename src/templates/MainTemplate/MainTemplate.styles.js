import styled from 'styled-components';
import { Platform, StatusBar, SafeAreaView, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

export const BackgroundApp = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.primary};
  z-index: 99999;
  position: relative;
  padding-top: ${Platform.OS === "android" ? `${Math.round(StatusBar.currentHeight)}px` : 0};
`;

export const Wrapper = styled(View)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: 16px 12px;
`;

