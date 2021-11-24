import React from 'react';
import { Wrapper } from './Menu.styles';
import { MenuLink } from 'components/molecules/MenuLink/MenuLink';

export const Menu = () => (
  <Wrapper>
    <MenuLink path="/" iconName="home" />
    <MenuLink path="/search" iconName="search" />
    <MenuLink path="/statistics" iconName="bar-chart" />
    <MenuLink path="/about" iconName="help-circle" />
  </Wrapper>
);
