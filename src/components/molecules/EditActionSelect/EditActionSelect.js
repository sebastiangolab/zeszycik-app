import React, { useState } from 'react';
import { EditSelectButton, EditButtonText, EditButtonIcon } from './EditActionSelect.styles';
import { InputLabel } from 'components/atoms/InputLabel/InputLabel';
import { FormField } from 'components/atoms/FormField/FormField';
import PropTypes from 'prop-types';
import { SelectModal } from 'components/organisms/SelectModal/SelectModal';
import { theme } from 'assets/styles/theme';
import { getEditTypeName } from 'helpers/getEditTypeName';

export const EditActionSelect = ({
  label,
  name,
  setEditActionForm,
  resetFormValues,
  setTouched,
}) => {
  const [editActionValue, setEditActionValue] = useState('add');
  const [modalVisible, setModalVisible] = useState(false);

  const editOptions = [
    {
      text: 'Dodać do długu',
      value: 'add',
    },
    {
      text: 'Odjąć od długu',
      value: 'delete',
    },
    {
      text: 'Zmienić nazwę',
      value: 'editName',
    },
  ];

  const handleSelectOption = (value) => {
    setEditActionValue(value);
    setModalVisible(false);
    setEditActionForm(name, value, false);
    setTouched({}, false);
    resetFormValues({ values: { editActionForm: value } });
  };

  return (
    <>
      <FormField>
        <InputLabel>{label}</InputLabel>
        <EditSelectButton
          onPress={() => setModalVisible(true)}
          underlayColor={theme.colors.white}
          activeOpacity={0.6}>
          <>
            <EditButtonText>{getEditTypeName(editActionValue)}</EditButtonText>
            <EditButtonIcon name="down" />
          </>
        </EditSelectButton>
      </FormField>
      <SelectModal
        isOpen={modalVisible}
        handleSelectOption={handleSelectOption}
        options={editOptions}
      />
    </>
  );
};

EditActionSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setEditActionForm: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
};
