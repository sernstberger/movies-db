import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import grey from '@material-ui/core/colors/grey';

const sansSerifFont = '"Montserrat","-apple-system,system-ui,BlinkMacSystemFont","Helvetica Neue",Arial,sans-serif';
// const serifFont = '"Merriweather",Georgia,serif';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffad01',
    },
    secondary: {
      main: '#ffad01',
    },
  },

  overrides: {
    MuiCard: {
      root: {
        border: `1px solid ${grey[300]}`,
        boxShadow: 'none',
        transition: 'all 500ms',

        '&:hover': {
          boxShadow: '0 5px 12px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.2)',
        },
      },
    },

    MuiChip: {
      root: {
        backgroundColor: '#008489',
        borderRadius: 4,
        color: '#fff',
        // padding: 2,
        height: 20,
        textTransform: 'uppercase',
      },
      label: {
        fontSize: '.75rem',
        fontWeight: 600,
        paddingLeft: 6,
        paddingRight: 6,
      }
    },
  },

  typography: {
    fontFamily: sansSerifFont,
    // fontSize: 10,
    display4: {
      color: '#000',
      fontStyle: 'italic',
      fontWeight: 900,
    },
    // display3: {
    //   fontFamily: serifFont,
    //   fontWeight: 700,
    // },
    // display2: {
    //   fontFamily: serifFont,
    //   fontWeight: 700,
    // },
    // display1: {
    //   fontFamily: serifFont,
    //   fontWeight: 700,
    // },
    // headline: {
    //   fontFamily: serifFont,
    //   fontWeight: 700,
      
    //   '@media (max-width: 960px)': {
    //     fontSize: '1rem',
    //   },
    // },
    // body2: {
    //   color: grey[600],
    //   fontSize: '.8125rem',
    //   fontWeight: 600,
    //   textTransform: 'uppercase',
    // },
    // caption: {
    //   color: grey[600],
    //   fontWeight: 700,
    // },
    // button: {
    //   // letterSpacing: '1px',
    //   // fontSize: 12,
    //   // textTransform: 'uppercase',
    // },
  },
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
