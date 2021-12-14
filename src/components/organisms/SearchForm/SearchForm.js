import React from 'react';
import { Formik } from 'formik';
import { FormikField } from 'components/molecules/FormikField/FormikField';
import PropTypes from 'prop-types';

export const SearchForm = ({ setSearchPhrase }) => {
  const handleOnChange = (value) => setSearchPhrase(value);

  return (
    <Formik initialValues={{ phrase: '' }}>
      {({ handleChange, values }) => (
        <FormikField
          label="Wpisz nazwę dłużnika"
          onChangeText={handleChange('phrase')}
          onChange={handleOnChange(values.phrase)}
          value={values.phrase}
        />
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  setSearchPhrase: PropTypes.func.isRequired,
};
