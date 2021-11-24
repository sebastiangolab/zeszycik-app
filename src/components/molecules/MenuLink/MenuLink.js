import React from 'react';
import { Wrapper } from './MenuLink.styles';
import { MenuIcon } from 'components/atoms/MenuIcon/MenuIcon';
import PropTypes from 'prop-types';
import { theme } from 'assets/styles/theme';

export const MenuLink = ({ path, iconName }) => (
  <Wrapper to={path} underlayColor={theme.colors.primary}>
    <MenuIcon name={iconName} />
  </Wrapper>
);

MenuLink.propTypes = {
  path: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
