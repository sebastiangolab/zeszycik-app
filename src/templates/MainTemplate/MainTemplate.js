import React, { useEffect } from 'react';
import { RoutesList } from '../../RoutesList';
import { Header } from 'components/atoms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { BackgroundApp, Wrapper, Content } from './MainTemplate.styles';
import { AddDebtButton } from 'components/molecules/AddDebtButton/AddDebtButton';
import { useLocation, useHistory } from 'react-router-dom';
import { BackHandler } from 'react-native';

export const MainTemplate = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleBackButtonClick = () => {
      history.goBack();
      return true;
    }  
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  }, []);

  return (
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
  );
};
