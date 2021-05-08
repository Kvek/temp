import { Button, IconButton } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const NavIconBtn = (theme) =>
  withStyles(
    {
      label: {
        color: theme.theme_override.navButtontext,
      },
      root: {
        '& svg path': {
          fill: theme.theme_override.navButtontext,
        },
        '&.selected': {
          '& svg path': {
            fill: theme.theme_override.navButtontextActive,
          },
        },

        '&:hover': {
          '& $label': {
            color: theme.theme_override.loginButtonTextHover,
          },
          backgroundColor: theme.theme_override.loginButtonBgHover,
          borderColor: theme.theme_override.loginButtonBorderHover,
        },

        backgroundColor: theme.theme_override.navButtonBg,

        borderColor: theme.theme_override.navButtonBorder,
      },
    },
    { withTheme: true }
  )(IconButton);

export const SaveBtn = (theme) =>
  withStyles(
    {
      label: {
        '& svg': {
          fill: 'black',
          paddingRight: '8px',
        },
        color: 'black',
        fontSize: '12px',
        fontWeight: 'bold',
      },

      root: {
        '&:hover': {
          backgroundColor: theme.theme_override.success[100],
        },
        backgroundColor: theme.theme_override.success[300],
        borderRadius: '5px',
        height: '40px',

        minWidth: '100px',
      },
    },
    { withTheme: true }
  )(Button);

export const DeleteBtn = (theme) =>
  withStyles(
    {
      label: {
        '& svg': {
          fill: theme.theme_override.black[0],
          paddingRight: '8px',
        },
        color: theme.theme_override.black[0],
      },

      root: {
        '&:hover': {
          '& $label': {
            '& svg': {
              fill: theme.theme_override.important[700],
            },
            color: theme.theme_override.important[700],
          },
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
        borderColor: 'transparent',

        padding: '5px 0px',
      },
    },
    { withTheme: true }
  )(Button);

export const CreateBtn = (theme) =>
  withStyles(
    {
      label: {
        '& svg': {
          fill: theme.theme_override.black[900],
          paddingRight: '4px',
        },
        color: theme.theme_override.black[900],
      },

      root: {
        borderRadius: '100px',
        padding: '2px 8px',
      },
    },
    { withTheme: true }
  )(Button);

export const CreateIconBtn = (theme) =>
  withStyles(
    {
      root: {
        '& svg': {
          fill: theme.theme_override.black[900],
        },
        backgroundColor: theme.theme_override.primary[400],
      },
    },
    { withTheme: true }
  )(IconButton);

export const OnOffButton = styled(Button)`
  && {
    background-color: transparent;
    border-color: ${({ disable, theme }) =>
      disable ? theme.important[400] : theme.success[400]};

    &:hover {
      background-color: ${({ disable, theme }) =>
        disable ? theme.important[400] : theme.success[400]};
      border-color: transparent;
      span {
        color: ${({ disable, theme }) =>
          disable ? theme.black[0] : theme.black[900]};
        svg {
          fill: ${({ disable, theme }) =>
            disable ? theme.black[0] : theme.black[900]};
        }
      }
    }

    span {
      color: ${({ disable, theme }) =>
        disable ? theme.important[400] : theme.success[400]};
      svg {
        fill: ${({ disable, theme }) =>
          disable ? theme.important[400] : theme.success[400]};
        margin-right: 4px;
      }
    }
  }
`;

export const GridButtonStyles = (theme) =>
  withStyles(
    {
      containedPrimary: {
        '&:hover': {
          '& $label': {
            color: theme.theme_override.gridButtonPrimaryTextHover,
          },
          backgroundColor: theme.theme_override.gridButtonPrimaryBgHover,
        },
        backgroundColor: theme.theme_override.gridButtonPrimaryBg,
        borderColor: theme.theme_override.gridButtonPrimaryBorder,
      },
      label: {
        color: theme.theme_override.gridButtonText,
      },
      root: {
        '&:hover': {
          '& $label': {
            color: theme.theme_override.gridButtonTextHover,
          },
          backgroundColor: theme.theme_override.gridButtonBgHover,
          borderColor: theme.theme_override.gridButtonBorderHover,
        },
        backgroundColor: theme.theme_override.gridButtonBg,
        borderColor: theme.theme_override.gridButtonBorder,
        borderWidth: '0px',
      },
    },
    { withTheme: true }
  )(Button);

export const LoginButton = styled(MuiButton)`
  && {
    background-color: ${({ theme }) => theme.loginButtonBg};
    border: ${({ theme }) => theme.loginButtonBorderWidth}px solid !important;
    border-color: ${({ theme }) => theme.loginButtonBorder} !important;
    border-radius: ${({ theme }) => theme.loginButtonRadius}px;
    padding: 12px 24px;

    span {
      color: ${({ theme }) => theme.loginButtonText};
      svg {
        fill: ${({ theme }) => theme.loginButtonText};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.loginButtonBgHover};
      border-color: ${({ theme }) => theme.loginButtonBorderHover};
      span {
        color: ${({ theme }) => theme.loginButtonTextHover};
        svg {
          fill: ${({ theme }) => theme.loginButtonTextHover};
        }
      }
    }
  }
`;
