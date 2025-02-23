import React from 'react';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import { FormButton } from 'components/atoms/FormButton/FormButton';
import { EditActionSelect } from 'components/molecules/EditActionSelect/EditActionSelect';
import { ValidationSchema } from './EditForm.validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { addValueToDebt, removeValueFromDebt, changeDebtorName } from 'store/actions';

export const EditForm = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = ({ editValue, newName, description, editActionForm }) => {
    let finalEditValue = editValue;
    if (editActionForm !== 'editName') {
      const numberEditValue = editValue.replace(',', '.');
      finalEditValue = Math.round(parseFloat(numberEditValue) * 100) / 100;
    }

    switch (editActionForm) {
      case 'add':
        dispatch(addValueToDebt(id, finalEditValue, description));
        navigate('/');
        break;
      case 'delete':
        dispatch(removeValueFromDebt(id, finalEditValue, description));
        navigate('/');
        break;
      case 'editName':
        dispatch(changeDebtorName(id, newName));
        navigate('/');
        break;
    }
  };

  return (
    <Formik
      initialValues={{
        editActionForm: 'add',
        editValue: '',
        newName: '',
        description: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => handleOnSubmit(values)}>
      {({ handleChange, values, handleSubmit, errors, touched, setFieldValue, resetForm, setTouched }) => (
        <>
          <EditActionSelect
            label="Co chcesz zrobić?"
            name="editActionForm"
            setEditActionForm={setFieldValue}
            resetFormValues={resetForm}
            setTouched={setTouched}
          />

          {values.editActionForm === 'editName' && (
            <FormikField
              label="Podaj nową nazwę"
              name="newName"
              onChangeText={handleChange('newName')}
              value={values.newName}
              errorText={errors.newName}
              errorTouched={touched.newName}
            />
          )}

          {['add', 'delete'].includes(values.editActionForm) && (
            <>
              <FormikField
                type="number"
                label="Podaj wartość (zł)"
                name="editValue"
                onChangeText={handleChange('editValue')}
                value={values.editValue}
                errorText={errors.editValue}
                errorTouched={touched.editValue}
              />

              <FormikField
                label="Podaj opis (opcjonalnie)"
                name="description"
                onChangeText={handleChange('description')}
                value={values.description}
                errorText={errors.description}
                errorTouched={touched.description}
              />
            </>
          )}

          <FormButton onPress={handleSubmit}>Zapisz</FormButton>
        </>
      )}
    </Formik>
  );
};
