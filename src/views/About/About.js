import React from 'react';
import { Element } from 'components/atoms/Element/Element';
import { Strong } from 'components/atoms/Strong/Strong';
import { Title, StyledText, ThanksText } from './About.styles';

const About = () => (
  <>
    <Element>
      <Title>Aplikacja Zeszycik</Title>
      <StyledText>Wersja 1.0</StyledText>
      <StyledText>
        <Strong>Autor:</Strong> Sebastian Gołąb
      </StyledText>
      <StyledText>
        <Strong>Email:</Strong> sebagolab97@gmail.com
      </StyledText>
    </Element>

    <Element>
      <ThanksText>
        Podziękowania dla Igora Gielasa (na snapie krulzloty) za pomysł na aplikacje
      </ThanksText>
    </Element>
  </>
);

export default About;
