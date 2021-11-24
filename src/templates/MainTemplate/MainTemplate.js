import React from 'react';
import { RoutesList } from '../../RoutesList';
import { Header } from 'components/atoms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { BackgroundApp, Wrapper, Content } from './MainTemplate.styles';

export const MainTemplate = () => (
  <BackgroundApp>
    <Wrapper>
      <Header />
      <Content>
        <RoutesList />
      </Content>
      <Menu />
    </Wrapper>
  </BackgroundApp>
);
