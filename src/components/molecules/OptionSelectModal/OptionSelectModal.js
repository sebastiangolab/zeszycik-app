import React from 'react';
import { theme } from 'assets/styles/theme';
import { ModalButton, ModalText } from './OptionSelectModal.styles';
import PropTypes from 'prop-types';

export const OptionSelectModal = ({ handleSelectOption, value, text, last }) => (
  <ModalButton
    onPress={() => handleSelectOption(value)}
    underlayColor={theme.colors.white}
    activeOpacity={0.5}
    last={last}>
    <ModalText>{text}</ModalText>
  </ModalButton>
);


OptionSelectModal.propTypes = {
  handleSelectOption: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
}