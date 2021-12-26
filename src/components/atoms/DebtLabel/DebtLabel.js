import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'components/atoms/Element/Element';
import { DebtorName, DebtValue } from './DebtLabel.styles';

export const DebtLabel = ({ debtorName, debtValue }) => (
  <Element>
    <DebtorName>{debtorName}</DebtorName>
    <DebtValue>{debtValue} zł</DebtValue>
  </Element>
);

DebtLabel.propTypes = {
  debtorName: PropTypes.string.isRequired,
  debtValue: PropTypes.number.isRequired,
};
