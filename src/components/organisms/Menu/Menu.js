import React from 'react';
import { Wrapper } from './Menu.styles';
import { MenuLink } from 'components/molecules/MenuLink/MenuLink';
import HomeIcon from '../../../assets/icons/home.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import BarChartIcon from '../../../assets/icons/bar-chart.svg';
import HelpCircleIcon from '../../../assets/icons/help-circle.svg';

export const Menu = () => (
  <Wrapper>
    <MenuLink path="/" icon={<HomeIcon />} />
    <MenuLink path="/search" icon={<SearchIcon />} />
    <MenuLink path="/statistics" icon={<BarChartIcon />} />
    <MenuLink path="/about" icon={<HelpCircleIcon />} />
  </Wrapper>
);
