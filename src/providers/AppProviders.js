import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { NativeRouter } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { SortDebtsProvider } from './SortDebtsProvider';
import { store, persistor } from 'store';

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SortDebtsProvider>
        <Router>
          <NativeRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </NativeRouter>
        </Router>
      </SortDebtsProvider>
    </PersistGate>
  </Provider>
);

AppProviders.propTypes = {
  children: PropTypes.any.isRequired,
};
