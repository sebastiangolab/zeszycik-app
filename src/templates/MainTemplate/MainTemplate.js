import React, { useEffect } from 'react';
import { RoutesList } from '../../RoutesList';
import { Header } from 'components/atoms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { BackgroundApp, Wrapper, Content } from './MainTemplate.styles';
import { AddDebtButton } from 'components/molecules/AddDebtButton/AddDebtButton';
import { useLocation, useNavigate } from 'react-router-native';
import { BackHandler } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const MainTemplate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButtonClick = () => {
      navigate(-1);
      return true;
    }  
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BackgroundApp>
        <Wrapper>
          <Header />
          <Content>
            <RoutesList />
          </Content>
          {location.pathname === '/' && (
              <AddDebtButton />
          )}
          <Menu />
        </Wrapper>
      </BackgroundApp>
    </GestureHandlerRootView>
  );
};
