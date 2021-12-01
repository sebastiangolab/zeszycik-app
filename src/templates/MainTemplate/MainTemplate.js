import React from 'react';
import { RoutesList } from '../../RoutesList';
import { Header } from 'components/atoms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { BackgroundApp, Wrapper, Content } from './MainTemplate.styles';
import { AddDebtButton } from 'components/molecules/AddDebtButton/AddDebtButton';
import { useLocation } from 'react-router-dom';

export const MainTemplate = () => {
  const location = useLocation();

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
