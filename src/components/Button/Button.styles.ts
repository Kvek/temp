import { Button, ButtonProps, IconButton } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import { Theme, ThemeOptions, withStyles } from '@material-ui/core/styles';
import { createStyles, Styles } from '@material-ui/styles';

import styled from 'styled-components';

export const StyledNavIconBtn = (theme: ThemeOptions) =>
  createStyles({
    label: {
      color: theme.variables.navButtontext,
    },
    root: {
      '& svg path': {
        fill: theme.variables.navButtontext,
      },
      '&.selected': {
        '& svg path': {
          fill: theme.variables.navButtontextActive,
        },
      },

      '&:hover': {
        '& $label': {
          color: theme.variables.loginButtonTextHover,
        },
        backgroundColor: theme.variables.loginButtonBgHover,
        borderColor: theme.variables.loginButtonBorderHover,
      },

      backgroundColor: theme.variables.navButtonBg,

      borderColor: theme.variables.navButtonBorder,
    },
  });

export const NavIconBtn = withStyles(
  StyledNavIconBtn as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(IconButton);

export const StyledSaveBtn = (theme: ThemeOptions) =>
  createStyles({
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
        backgroundColor: theme.variables.success[100],
      },
      backgroundColor: theme.variables.success[300],
      borderRadius: '5px',
      height: '40px',

      minWidth: '100px',
    },
  });

export const SaveBtn = withStyles(StyledSaveBtn as Styles<Theme, {}, string>, {
  withTheme: true,
})(Button);

export const StyledDeleteBtn = (theme: ThemeOptions) =>
  createStyles({
    label: {
      '& svg': {
        fill: theme.variables.black[0],
        paddingRight: '8px',
      },
      color: theme.variables.black[0],
    },

    root: {
      '&:hover': {
        '& $label': {
          '& svg': {
            fill: theme.variables.important[700],
          },
          color: theme.variables.important[700],
        },
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      borderColor: 'transparent',

      padding: '5px 0px',
    },
  });

export const DeleteBtn = withStyles(
  StyledDeleteBtn as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(Button);

export const StyledCreateBtn = (theme: ThemeOptions) =>
  createStyles({
    label: {
      '& svg': {
        fill: theme.variables.black[900],
        paddingRight: '4px',
      },
      color: theme.variables.black[900],
    },

    root: {
      borderRadius: '100px',
      padding: '2px 8px',
    },
  });

export const CreateBtn = withStyles(
  StyledCreateBtn as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(Button);

export const StyledCreateIconBtn = (theme: ThemeOptions) =>
  createStyles({
    root: {
      '& svg': {
        fill: theme.variables.black[900],
      },
      backgroundColor: theme.variables.primary[400],
    },
  });

export const CreateIconBtn = withStyles(
  StyledCreateIconBtn as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(IconButton);

export const StyledOnOffButton = styled(Button)<ButtonProps>`
  && {
    background-color: transparent;
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.important[400] : theme.success[400]};

    &:hover {
      background-color: ${({ disabled, theme }) =>
        disabled ? theme.important[400] : theme.success[400]};
      border-color: transparent;
      span {
        color: ${({ disabled, theme }) =>
          disabled ? theme.black[0] : theme.black[900]};
        svg {
          fill: ${({ disabled, theme }) =>
            disabled ? theme.black[0] : theme.black[900]};
        }
      }
    }

    span {
      color: ${({ disabled, theme }) =>
        disabled ? theme.important[400] : theme.success[400]};
      svg {
        fill: ${({ disabled, theme }) =>
          disabled ? theme.important[400] : theme.success[400]};
        margin-right: 4px;
      }
    }
  }
`;

export const GridButtonStyles = (theme: ThemeOptions) =>
  withStyles(
    {
      containedPrimary: {
        '&:hover': {
          '& $label': {
            color: theme.variables.gridButtonPrimaryTextHover,
          },
          backgroundColor: theme.variables.gridButtonPrimaryBgHover,
        },
        backgroundColor: theme.variables.gridButtonPrimaryBg,
        borderColor: theme.variables.gridButtonPrimaryBorder,
      },
      label: {
        color: theme.variables.gridButtonText,
      },
      root: {
        '&:hover': {
          '& $label': {
            color: theme.variables.gridButtonTextHover,
          },
          backgroundColor: theme.variables.gridButtonBgHover,
          borderColor: theme.variables.gridButtonBorderHover,
        },
        backgroundColor: theme.variables.gridButtonBg,
        borderColor: theme.variables.gridButtonBorder,
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
