import { CssBaseline, makeStyles, useTheme } from '@material-ui/core';

// import { Router } from '@reach/router';
import React from 'react';
import { render } from 'react-dom';

import { setGlobalTheme } from 'celertech';
import { ThemeProvider } from 'styled-components';

// import { AgGridPage } from './pages/AgGridPage';
import { Sidebar } from './Sidebar';
import { theme } from './theme';

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  root: {
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyles();

  const theme = setGlobalTheme({
    clientTheme: {
      overrides: () => ({}),
      palette: () => ({}),
      props: () => ({}),
      shape: () => ({}),
      typography: () => ({}),
    },
    clientThemeOverrides: () => ({}),
    colors: {
      app: {},
      black: {},
      buy: {},
      caution: {},
      important: {},
      information: {},
      pending: {},
      primary: {},
      risk: {},
      secondary: {},
      sell: {},
      shadows: {},
      status: {},
      success: {},
      transparent: {},
      transparentInverse: {},
      warning: {},
    },
  });

  console.log(theme);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Sidebar />
          <div className={classes.content}>
            <img alt="" src={theme.variables.AppBg} />
            {/* <Router> */}
            {/* <AgGridPage path="/AgGridPage" /> */}
            {/* </Router> */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

render(<App />, document.getElementById('root'));
