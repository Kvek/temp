import { CssBaseline, makeStyles } from '@material-ui/core';
import { Router } from '@reach/router';

import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { AgGridPage } from './pages/AgGridPage';
import { Sidebar } from './Sidebar';
import { theme } from './theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Sidebar />
          <div className={classes.content}>
            <Router>
              <AgGridPage path="/AgGridPage" />
            </Router>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

render(<App />, document.getElementById('root'));
