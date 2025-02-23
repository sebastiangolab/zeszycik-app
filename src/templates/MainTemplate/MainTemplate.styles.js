import styled, { css } from 'styled-components/native';
import { Platform, StatusBar, SafeAreaView, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

export const BackgroundApp = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.primary};
  z-index: 99999;
  position: relative;
  padding-top: ${Platform.OS === "android" ? `${Math.round(StatusBar.currentHeight)}px` : 0};

  ${Platform.OS === "web" ? css`
    background-color: #882038;
    height: 100vh;
  ` : null};
`;

export const Wrapper = styled(View)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.background};

  ${Platform.OS === "web" ? css`
    width: 400px;
    height: 90vh;
    max-height: 750px;
    margin: auto;
    border-radius: 20px;
    border: 1px solid #333;
    overflow: hidden;
  ` : null};
`;

export const Content = styled(ScrollView)`
  flex: 1;
  padding: 16px 12px;
`;