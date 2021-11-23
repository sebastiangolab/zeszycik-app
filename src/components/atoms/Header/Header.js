import React from 'react';
import { Wrapper } from './Header.styles';
import PropTypes from 'prop-types';

export const Header = ({ title = 'Zeszycik' }) => <Wrapper>{title}</Wrapper>;

Header.propTypes = {
  title: PropTypes.string,
};
