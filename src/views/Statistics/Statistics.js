import React from 'react';
import { Element } from 'components/atoms/Element/Element';
import { Title, Value } from './Statistics.styles';

const Statistics = () => {
  return (
    <>
      <Element>
        <Title>Aktualnie pożyczasz:</Title>
        <Value>913 zł</Value>
      </Element>
      <Element>
        <Title>Liczba dłużników:</Title>
        <Value>5</Value>
      </Element>
      <Element>
        <Title>Najwięcej pożycza:</Title>
        <Value>Klaudia</Value>
      </Element>
      <Element>
        <Title>Najmniej pożycza:</Title>
        <Value>Igor</Value>
      </Element>
    </>
  );
};

export default Statistics;
