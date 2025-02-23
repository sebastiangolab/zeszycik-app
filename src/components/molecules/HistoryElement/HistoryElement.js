import React from 'react';
import { Wrapper, Date, Value, Description, DescriptionLine } from './HistoryElement.styles';
import { PrimaryColor } from 'components/atoms/PrimaryColor/PrimaryColor';

export const HistoryElement = ({ date, mark, value, description }) => (
  <Wrapper isDescription={description ? true : false}>
    <Date>{date}</Date>
    <Value>
      <PrimaryColor>{mark}</PrimaryColor> {value} zł
    </Value>
    {description && 
      <DescriptionLine>
        <Description>Opis: {description}</Description>
      </DescriptionLine>
    }
  </Wrapper>
);
