import React from 'react';
import { Wrapper, Date, Value } from './HistoryElement.styles';
import { PrimaryColor } from 'components/atoms/PrimaryColor/PrimaryColor';

export const HistoryElement = ({ date, mark, value }) => (
  <Wrapper>
    <Date>{date}</Date>
    <Value>
      <PrimaryColor>{mark}</PrimaryColor> {value} zł
    </Value>
  </Wrapper>
);
