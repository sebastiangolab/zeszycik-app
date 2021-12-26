import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { pickerStyle, PickerIcon } from './EditActionSelect.styles';
import { InputLabel } from 'components/atoms/InputLabel/InputLabel';
import { FormField } from 'components/atoms/FormField/FormField';

export const EditActionSelect = ({
  label,
  selectValue,
  name,
  setEditActionForm,
  resetFormValues,
}) => {
  const [editActionValue, setEditActionValue] = useState('add');

  useEffect(() => {
    setEditActionValue(selectValue);
  }, []);

  return (
    <FormField>
      <InputLabel>{label}</InputLabel>
      <RNPickerSelect
        style={pickerStyle}
        value={editActionValue}
        placeholder={{}}
        onValueChange={(value) => {
          setEditActionForm(name, value, false);
          setEditActionValue(value);
          resetFormValues({ values: { editActionForm: editActionValue } });
        }}
        useNativeAndroidPickerStyle={false}
        items={[
          { label: 'Dodać do długu', value: 'add' },
          { label: 'Odjąć od długu', value: 'delete' },
          { label: 'Zmienić nazwę', value: 'editName' },
        ]}
        Icon={() => {
          return <PickerIcon name="down" />;
        }}
      />
    </FormField>
  );
};
