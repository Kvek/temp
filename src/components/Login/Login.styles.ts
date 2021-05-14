import MuiButton from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/PermIdentity';

import styled from 'styled-components';

import { ButtonBar as DefaultButtonBar } from '../ButtonBar';
import { CssGridCell } from '../Grid';
import { ApplicationIconInterface, VersionNumberInterface } from '.';

export const LoginContainer = styled.div`
  -moz-animation: AnimationName 30s ease infinite;
  -webkit-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
  background: ${({ theme }) => theme.loginBg};
  background-size: ${({ theme }) => theme.loginBgSize};
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const LoginPanel = styled.div`
  background-color: ${({ theme }) => theme.loginPanelBg};
  border: ${({ theme }) => theme.loginPanelBorderWidth}px solid
    ${({ theme }) => theme.loginPanelBorder};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
`;

export const LoginHeader = styled.div`
  background-color: ${({ theme }) => theme.loginHeaderBg};
  background-image: url(${({ theme }) => theme.loginHeaderBgImg});
  background-position: center;
  background-size: ${({ theme }) => theme.loginHeaderBgSize};
  border-radius: 5px 5px 0px 0px;
  display: table;
  height: ${({ theme }) => theme.loginHeaderHeight};
  padding: 0px;
  width: 100%;
`;

export const LogoCompany = styled.div`
  background-image: url(${({ theme }) => theme.loginHeaderLogoImg});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: ${({ theme }) => theme.loginHeaderLogoSize};
  height: 25px;
  margin-left: 5px;
  margin-right: 0;
  position: absolute;
  width: 80px;
`;

export const LogoApplicationContainer = styled(CssGridCell)`
  height: 100%;
  width: 100%;
`;

export const ApplicationIcon = styled.div<ApplicationIconInterface>`
  background: ${({ defaultIcon, theme }) => {
    if (theme.loginHeaderAppIconBg !== null) {
      return `url(${theme.loginHeaderAppIconBg}) center no-repeat`;
    }
    return `url(${defaultIcon}) center no-repeat`;
  }};
  background-size: ${({ theme }) => theme.loginHeaderAppBgSize};
  height: ${({ theme }) => theme.loginHeaderHeight};
  overflow: visible;
  width: 100%;
`;

export const LoginBodyTop = styled(CssGridCell)`
  padding: ${({ theme }) => theme.loginBodyTopPadding};
`;

export const LoginBody = styled(CssGridCell)`
  padding: ${({ theme }) => theme.loginBodyBottomPadding};
`;

export const ApplicationContainer = styled(CssGridCell)`
  border-color: ${({ theme }) => theme.appVersionContainerBorder};
  border-style: solid;
  border-width: ${({ theme }) => theme.appVersionContainerBorderWidth};
  padding: ${({ theme }) => theme.appVersionContainerPadding};
`;

export const ApplicationName = styled.h1`
  color: ${({ theme }) => theme.app[200]};
  font-size: ${({ theme }) => theme.fontLg};
  font-weight: ${({ theme }) => theme.fontWeightR};
  letter-spacing: ${({ theme }) => theme.letterSpacingXL};
  text-align: center;
  text-transform: uppercase;
`;

export const VersionNumber = styled.div<VersionNumberInterface>`
  color: ${(props) => (props.logging ? 'red' : props.theme.appVersionText)};
  font-size: ${({ theme }) => theme.fontRg};
  font-weight: ${({ theme }) => theme.fontWeightR};
  letter-spacing: ${({ theme }) => theme.letterSpacingRg};
  margin-bottom: 0px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export const Form = styled.form`
  flex-grow: 1;
`;

export const UsernameIcon = styled(AccountCircleIcon)`
  && {
    color: white;
  }
`;

export const PasswordIcon = styled(LockIcon)`
  && {
    color: white;
  }
`;

export const TextField = styled(MuiTextField)`
  && {
    margin: 0px;
    width: 100%;
    label {
      color: ${({ theme }) => theme.loginTextFieldLabel};
      font-size: ${({ theme }) => theme.fontSm};
      letter-spacing: ${({ theme }) => theme.letterSpacingRg};
    }
    svg {
      color: ${({ theme }) => theme.loginTextFieldText};
    }

    div {
      background-color: ${({ theme }) => theme.loginTextFieldBg};
      input {
        color: ${({ theme }) => theme.loginTextFieldText};
        padding: 8px !important;
      }
    }

    input:-internal-autofill-selected,
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.loginTextFieldBg}
        inset;
      -webkit-text-fill-color: ${(props) =>
        props.theme.loginTextFieldText} !important;
      background-color: ${({ theme }) => theme.loginTextFieldBg};
      border-color: transparent;
      box-shadow: 0 0 0 1000px ${({ theme }) => theme.loginTextFieldBg} inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    &::before {
      border-bottom: 1px solid ${({ theme }) => theme.transparentInverse[300]} !important;
    }

    &:hover {
      &::before {
        border-bottom: 1px solid ${({ theme }) => theme.transparentInverse[500]} !important;
        input {
          color: ${({ theme }) => theme.black[0]};
        }
      }
    }

    &:after {
      border-bottom: 1px solid ${({ theme }) => theme.transparentInverse[700]};
    }
  }
`;

export const ButtonDescreet = styled.button`
  background-color: transparent;
  border-width: 0;
  color: ${({ theme }) => theme.black[700]};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-style: italic;
  height: 1.5rem;
  letter-spacing: 0px;
  max-height: 1.5rem;
  padding: 0px;
  text-transform: inherit;

  &:hover {
    color: ${({ theme }) => theme.black[0]};
  }
`;

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

export const ButtonBar = styled(DefaultButtonBar)`
  && {
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.important[400]};
  font-size: ${({ theme }) => theme.fontSm};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeightR};
  letter-spacing: 0.05rem;
  padding: 10px 0 0 0;
  position: absolute;
  text-align: left;
  width: 100%;
`;
