window.clientTheme = window.clientTheme || {};

window.clientTheme.palette = function() {
  return {
    // Example of pallette overrides
    // primary: {
    //   main: primary[400],
    // },
    // secondary: {
    //   main: black[0],
    // },
  };
};

window.clientTheme.shape = function() {
  return {
    // Example; this is the only thing you will change in this object
    // borderRadius: 15,
  };
};

window.clientTheme.typography = function() {
  return {
    // Example of typography overrides
    // htmlFontSize: 10,
    // fontSize: 10,
    // h1: {},
    // h2: {},
    // h3: {},
    // h4: {},
    // h5: {},
    // h6: {},
    // body1: {
    //   fontSize: '1.1rem',
    // },
  };
};

window.clientTheme.props = function() {
  return {
    // Example of default props
    // MuiButton: {
    //   variant: 'contained  ',
    // },
  };
};

window.clientTheme.overrides = function(
  {
    // Example of importing colours in the object
    // primary,
    // black,
    // success,
    // important,
    // secondary
    // theme
  }
) {
  return {
    // Example of a Global Mui Override
    // MuiAvatar: {
    //   colorDefault: {
    //     backgroundColor: 'red',
    //     color: important[400],
    //   },
    // },
  };
};
