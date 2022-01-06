import React from 'react';
import { TitleContainer, WrapperText } from './TitleSelectModal.styles';
import PropTypes from 'prop-types';

export const TitleSelectModal = ({ children }) => (
  <TitleContainer>
    <WrapperText>{children}</WrapperText>
  </TitleContainer>
);

TitleSelectModal.propTypes = {
  children: PropTypes.string.isRequired,
}
