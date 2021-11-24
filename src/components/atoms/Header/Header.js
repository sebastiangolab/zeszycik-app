import React from 'react';
import { Wrapper } from './Header.styles';
import { useLocation } from 'react-router-dom';
import { getHeaderTitle } from 'helpers/getHeaderTitle';

export const Header = () => {
  const locations = useLocation();

  return <Wrapper>{getHeaderTitle(locations.pathname)}</Wrapper>;
};
