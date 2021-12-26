import React from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import PropTypes from 'prop-types';

export const SearchForm = ({ setSearchPhrase }) => {
  const handleOnChange = (value) => setSearchPhrase(value);

  return (
    <Formik initialValues={{ phrase: '' }}>
      {({ setFieldValue, values }) => (
        <FormikField
          label="Wpisz nazwę dłużnika"
          onChangeText={(e) => {
            setFieldValue('phrase', e);
            handleOnChange(e);
          }}
          value={values.phrase}
        />
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  setSearchPhrase: PropTypes.func.isRequired,
};
