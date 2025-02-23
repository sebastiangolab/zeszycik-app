import React from 'react';
import { Wrapper } from './MenuLink.styles';
import PropTypes from 'prop-types';
import { theme } from 'assets/styles/theme';

export const MenuLink = ({ path, icon }) => (
  <Wrapper to={path} underlayColor={theme.colors.primary}>
    {icon}
  </Wrapper>
);

MenuLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
