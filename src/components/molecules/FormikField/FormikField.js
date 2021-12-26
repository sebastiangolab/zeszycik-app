import React, { useState } from 'react';
import { FormField } from 'components/atoms/FormField/FormField';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { InputLabel } from 'components/atoms/InputLabel/InputLabel';
import { ErrorText } from 'components/atoms/ErrorText/ErrorText';
import PropTypes from 'prop-types';

export const FormikField = ({
  type = 'text',
  label,
  errorText,
  errorTouched,
  children,
  isMarkSwitchButton,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <FormField>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        {...props}
        onFocus={() => setIsFocus((state) => !state)}
        onBlur={() => setIsFocus((state) => !state)}
        isFocus={isFocus}
        isMarkSwitchButton={isMarkSwitchButton}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
      />
      {errorText && errorTouched && <ErrorText>{errorText}</ErrorText>}
      {children}
    </FormField>
  );
};

FormikField.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  errorTouched: PropTypes.bool,
};
