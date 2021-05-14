import MuiCheckBox from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import {
  createStyles,
  Theme,
  ThemeOptions,
  withStyles,
} from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import { Styles } from '@material-ui/styles';

import classnames from 'classnames';
import styled from 'styled-components';

import { CssGridCell } from '../Grid';
import { FormTextFieldType } from '.';

export const StyledTextField = styled(MuiTextField)<FormTextFieldType>`
  && {
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .header-panel-controls & {
      box-sizing: border-box;
      height: 100%;
      margin: 0px;
      padding: 0px;

      label {
        font-size: 0.6em;
        height: 100%;
        padding: 0px 0px 0px 4px !important;
        position: absolute;
        transform: translateY(calc(0% + 0.15em)) !important;
        transform-origin: inherit;
      }

      > div {
        font-size: 10px;
        height: 100% !important;
        margin-top: 0px !important;
        padding: 0px !important;

        > div:first-child,
        input {
          align-content: center;
          align-self: center;
          display: grid;
          height: 100%;
          padding: ${({ buttonPadding, hideValue }) => {
            if (hideValue) return '0px !important';
            if (buttonPadding) return '0.6em 22px 0 4px !important';
            return '0.6em 4px 0 4px !important';
          }};
        }
        .inputAdornmentContainer {
          padding: 0.6em 4px 0 4px !important;
        }

        button {
          height: 100%;
          position: absolute;
          right: 0;
        }

        svg {
          height: 100%;
        }
      }
    }

    ${({ type }) =>
      type === 'number' &&
      `
      > div {
        padding-right: 0px !important;
      }
    `};

    ${({ hideValue }) =>
      hideValue &&
      `
      > div > div:first-of-type,
      > div > div:last-of-type {
        position: absolute;
        box-sizing: border-box;
        width: 100% !important;
        height: 100%;
        top: 0;
        left: 0;
        display: grid;
      }
      > div > textarea:first-of-type,
      > div > input:first-of-type {
        visibility: hidden;
      }
    `};

    ${({ double, theme }) =>
      double &&
      `
      position: relative;
      
      > div > div:first-of-type {
        width: 50% !important;
      }

      > div > div:last-of-type {
        width: 50% !important;
        left: inherit;
        right: 0;
      }

      > div > textarea:first-of-type {
        width: 0px !important;
        padding: 6px !important;
      }

      &::after{
        content: "/";
        font-size: 14px;
        font-weight: bold;
        color: ${theme.transparentInverse[200]};
        position: absolute;
        left: 50%;
        display: grid;
        align-content: center;
        height: 100%;
        transform: translateX(-50%);
      }
  `};
  }
`;

export const TransparentInputBase = withStyles(
  {
    root: {
      '& > div': {
        '& > div': {
          paddingLeft: '0px !important',
          paddingRight: '16px !important',
        },
        '& input': {
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
          textAlign: 'right',
        },
        '& svg': {
          transform: 'translate(5px, -50%)',
        },
        backgroundColor: 'transparent',

        fontSize: '1rem',
      },
    },
  },
  { withTheme: true }
)(MuiTextField);

export const StyledSmallTextField = (theme: ThemeOptions) =>
  createStyles({
    root: {
      '& > div': {
        '& > div': {
          color: theme.variables.black[0],
          fontSize: '10px',
          fontStyle: 'italic',
          padding: '2px 4px',
        },
        '& > svg': {
          height: '14px',
          top: 'calc(50% - 7px)',
          width: '14px',
        },
        '& fieldset': {
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: theme.variables.transparentInverse[100],
          borderRadius: '2px',
          boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.8)',
        },
        '& input': {
          color: theme.variables.black[0],
          fontSize: '10px',
          fontStyle: 'italic',
          padding: '2px 4px',
        },
      },
    },
  });

export const SmallTextField = withStyles(
  StyledSmallTextField as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(MuiTextField);

export const FormHelperText = styled(MuiFormHelperText)``;

export const GridTextField = styled(StyledTextField)`
  && {
    box-sizing: border-box;
    height: 100%;
    padding: 0px;

    label {
      font-size: 0.6em;
      height: 100%;
      padding: 0px 0px 0px 4px !important;
      position: absolute;
      transform: translateY(calc(0% + 0.15em));
      transform-origin: inherit;
    }

    > div {
      font-size: 10px;
      height: 100% !important;
      margin-top: 0px !important;
      padding: 0px !important;

      > div:first-child,
      input {
        align-content: center;
        align-self: center;
        display: grid;
        height: 100%;
        padding: ${({ buttonPadding, hideValue }) => {
          if (hideValue) return '0px !important';
          if (buttonPadding) return '0.6em 22px 0 4px !important';
          return '0.6em 4px 0 4px !important';
        }};
      }
      .inputAdornmentContainer {
        padding: 0.6em 4px 0 4px !important;
      }

      button {
        height: 100%;
        position: absolute;
        right: 0;
      }

      svg {
        height: 100%;
      }
    }

    ${({ hideValue }) =>
      hideValue &&
      `
      > div input{
        font-size: 10px;
        padding: 0.6em 4px 0 4px !important;
      }
    `};

    ${({ double }) =>
      double &&
      `
      > div > div:last-of-type{
        // text-align: right;
        padding-left: 4px;
      }

      &::after{
        font-size: 12px;
        // align-content: center;
        padding-top: 3px;
      }
    `};
  }
`;

export const FormCL = styled(MuiFormControlLabel)`
  && {
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 2px;
    span:last-child {
      font-size: ${({ theme }) => theme.fontRg};
      letter-spacing: ${({ theme }) => theme.letterSpacingLg};
    }
  }
`;

export const CheckAllHeaderContainer = styled.fieldset`
  && {
    border: 1px solid grey;
    width: 100%;
    legend {
      margin-left: 6px;
      padding: 0 8px 0 4px;
      span:last-child {
        font-style: normal;
        font-weight: bold;
      }
    }
  }
`;

export const CheckAllContentContainer = styled(CssGridCell)``;

export const StyledCheckBoxUseStyles = createStyles((theme: ThemeOptions) => ({
  checked: {
    '& span:first-child': {
      border: classnames('1px solid', theme.variables.primary[400]),
      color: theme.variables.primary[400],
    },
  },

  root: {
    '& span:first-child': {
      '&:hover': {
        borderColor: theme.variables.black[0],
      },
      border: classnames('1px solid', theme.variables.transparentInverse[300]),
      borderRadius: 2,
      marginTop: 2,
      padding: 1,
      transition: 'all 0.3s ease',
    },
    color: 'transparent',
    marginRight: 8,

    padding: 0,
  },
}));

export const StyledMuiCheckBox = withStyles(
  StyledCheckBoxUseStyles as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(MuiCheckBox);
