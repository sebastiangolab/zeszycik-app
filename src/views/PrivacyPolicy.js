import React from 'react';
import { Element } from 'components/atoms/Element/Element';
import { Paragraph, LastParagraph } from 'components/atoms/Paragraphs/Paragraphs';

const PrivacyPolicy = () => {
  return (
    <Element>
      <Paragraph>
        Traktujemy prywatność tak samo poważnie jak Ty, dlatego informujemy że aplikacja "Zeszycik"
        nie pobiera ani nie przetwarza Państwa danych osobowych.
      </Paragraph>
      <LastParagraph>
        Od czasu do czasu możemy aktualizować niniejszą politykę prywatności. Jeśli masz pytania,
        sugestie lub inne uwagi, skontaktuj się z nami: sebagolab97@gmail.com.
      </LastParagraph>
    </Element>
  );
};

export default PrivacyPolicy;
