import React from 'react';
import { Element } from 'components/atoms/Element/Element';
import { Strong } from 'components/atoms/Strong/Strong';
import { Title, StyledText } from './About.styles';
import { Link } from 'react-router-native';
import { theme } from 'assets/styles/theme';

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

    <Element as={Link} to="/privacy" underlayColor={theme.colors.white}>
      <StyledText isLink={true}>Polityka prywatności</StyledText>
    </Element>
  </>
);

export default About;
