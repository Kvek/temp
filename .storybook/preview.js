// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

import { ThemeProvider } from 'styled-components';

import { styledTheme } from '../theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
