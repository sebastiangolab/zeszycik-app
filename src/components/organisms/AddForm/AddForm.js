import React from 'react';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import { FormButton } from 'components/atoms/FormButton/FormButton';
import { useDispatch } from 'react-redux';
import { addDebts } from 'store/actions';

export const AddForm = () => {
  const dispatch = useDispatch();
    
  return (
    <Formik
      initialValues={{
        name: '',
        debtValue: '',
      }}
      onSubmit={({name, debtValue}) => dispatch(addDebts(name, debtValue))}
    >
      {({ handleChange, values, handleSubmit }) => (
        <>
          <FormikField
            label="Imię i nazwisko"
            onChangeText={handleChange('name')}
            value={values.name}
          />

          <FormikField
            label="Wartość długu"
            onChangeText={handleChange('debtValue')}
            value={values.debtValue}
          />

          <FormButton onPress={handleSubmit}>Dodaj</FormButton>
        </>
      )}
    </Formik>
  );
};
