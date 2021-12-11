import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { SortDebtsProvider } from './SortDebtsProvider';
import { store } from 'store';

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <SortDebtsProvider>
      <NativeRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NativeRouter>
    </SortDebtsProvider>
  </Provider>
);

AppProviders.propTypes = {
  children: PropTypes.any.isRequired,
};
