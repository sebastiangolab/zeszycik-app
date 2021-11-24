import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store } from 'store';

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <NativeRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NativeRouter>
  </Provider>
);

AppProviders.propTypes = {
  children: PropTypes.any.isRequired,
};
