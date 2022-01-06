import React from 'react';
import { Modal } from 'react-native';
import { TitleSelectModal } from 'components/atoms/TitleSelectModal/TitleSelectModal';
import { OptionSelectModal } from 'components/molecules/OptionSelectModal/OptionSelectModal';
import { ModalCenter, ModalBackground, ModalContent } from './SelectModal.styles';
import PropTypes from 'prop-types';

export const SelectModal = ({ isOpen, handleSelectOption, title = 'Wybierz opcje', options }) => {
  return (
    <Modal animationType="none" transparent={true} visible={isOpen}>
      <ModalCenter>
        <ModalBackground />
        <ModalContent>
          <TitleSelectModal>{title}</TitleSelectModal>
          {options.map((option, index) => (
            <OptionSelectModal
              key={option.value}
              handleSelectOption={handleSelectOption}
              value={option.value}
              text={option.text}
              last={options.length === index + 1 ? true : false}
            />
          ))}
        </ModalContent>
      </ModalCenter>
    </Modal>
  );
};

SelectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
