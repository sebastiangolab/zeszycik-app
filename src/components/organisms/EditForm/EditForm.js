import React from 'react';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import { FormButton } from 'components/atoms/FormButton/FormButton';
import { EditActionSelect } from 'components/molecules/EditActionSelect/EditActionSelect';
import { ValidationSchema } from './EditForm.validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addValueToDebt, removeValueFromDebt, changeDebtorName } from 'store/actions';

export const EditForm = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleOnSubmit = ({ editValue, newName, description, editActionForm }) => {
    const prasedEditValue = parseFloat(editValue);

    switch (editActionForm) {
      case 'add':
        dispatch(addValueToDebt(id, prasedEditValue, description));
        navigate('/');
        break;
      case 'delete':
        dispatch(removeValueFromDebt(id, prasedEditValue, description));
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
      {({ handleChange, values, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
        <>
          <EditActionSelect
            label="Co chcesz zrobić?"
            name="editActionForm"
            selectValue={values.editActionForm}
            setEditActionForm={setFieldValue}
            resetFormValues={resetForm}
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
