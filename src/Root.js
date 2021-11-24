import React from 'react';
import { AppProviders } from 'providers/AppProviders';
import { MainTemplate } from 'templates/MainTemplate/MainTemplate';

export const Root = () => {
  return (
    <AppProviders>
      <MainTemplate />
    </AppProviders>
  );
};
