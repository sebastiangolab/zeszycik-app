import React, { useState } from 'react';
import { FormField } from 'components/atoms/FormField/FormField';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { InputLabel } from 'components/atoms/InputLabel/InputLabel';
import PropTypes from 'prop-types';

export const FormikField = ({ label, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <FormField>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        {...props}
        onFocus={() => setIsFocus((state) => !state)}
        onBlur={() => setIsFocus((state) => !state)}
        isFocus={isFocus}
      />
    </FormField>
  );
};

FormikField.propTypes = {
  label: PropTypes.string.isRequired,
}
