import React from 'react';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import { FormButton } from 'components/atoms/FormButton/FormButton';
import { useDispatch } from 'react-redux';
import { addDebts } from 'store/actions';
import { ValidationSchema } from './AddForm.validation';
import { useNavigate } from 'react-router-dom';
import { MarkSwitchButton } from 'components/molecules/MarkSwitchButton/MarkSwitchButton';

export const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = ({ name, debtValue, mark, description }) => {
    const numberDebtValue = debtValue.replace(',', '.');
    const parsedDebtValue = mark === '-' ? parseFloat(numberDebtValue) * -1 : parseFloat(numberDebtValue);
    dispatch(addDebts(name, parsedDebtValue, mark, description));
    navigate('/');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        debtValue: '',
        mark: '+',
        description: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => handleOnSubmit(values)}>
      {({ handleChange, values, handleSubmit, errors, touched, setFieldValue }) => (
        <>
          <FormikField
            label="Imię i nazwisko"
            name="name"
            onChangeText={handleChange('name')}
            value={values.name}
            errorText={errors.name}
            errorTouched={touched.name}
          />

          <FormikField
            type="number"
            label="Wartość długu"
            name="debtValue"
            onChangeText={handleChange('debtValue')}
            value={values.debtValue}
            errorText={errors.debtValue}
            errorTouched={touched.debtValue}
            isMarkSwitchButton={true}>
            <MarkSwitchButton mark={values.mark} setMark={setFieldValue} />
          </FormikField>

          <FormikField
            label="Podaj opis (opcjonalnie)"
            name="description"
            onChangeText={handleChange('description')}
            value={values.description}
            errorText={errors.description}
            errorTouched={touched.description}
          />

          <FormButton onPress={handleSubmit}>Dodaj</FormButton>
        </>
      )}
    </Formik>
  );
};
