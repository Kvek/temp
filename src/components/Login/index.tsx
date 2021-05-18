import { OutlinedTextFieldProps } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import { mdiHelpCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

import React, { ChangeEventHandler, FormEventHandler, ReactNode } from 'react';

import { CssGridCell } from '../Grid';
import {
  ApplicationContainer,
  ApplicationIcon,
  ApplicationName,
  ButtonBar,
  ErrorMessage,
  Form,
  LoginBody,
  LoginBodyTop,
  LoginButton,
  LoginContainer,
  LoginHeader,
  LoginPanel,
  LogoApplicationContainer,
  LogoCompany,
  PasswordIcon,
  TextField,
  UsernameIcon,
  VersionNumber,
} from './Login.styles';

export interface ApplicationIconInterface {
  defaultIcon: string;
}

export interface VersionNumberInterface {
  logging?: boolean;
}

export interface LoginComponentInterface
  extends ApplicationIconInterface,
    VersionNumberInterface,
    OutlinedTextFieldProps {
  appName: string;
  applicationNameVisible: boolean;
  errorMessage: string;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  passwordChangeProps:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  submitButtonText: ReactNode;
  submitButtonVariant: 'text' | 'outlined' | 'contained';
  usernameChangeProps:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  version: ReactNode;
}

export const LoginComponent = ({
  appName,
  applicationNameVisible,
  className,
  defaultIcon,
  errorMessage,
  handleSubmit,
  logging,
  passwordChangeProps,
  submitButtonText,
  submitButtonVariant,
  usernameChangeProps,
  version,
}: LoginComponentInterface) => (
  <LoginContainer className={className}>
    <LoginPanel>
      <LoginHeader>
        <LogoCompany className="loginHeaderLogo" id="loginHeaderLogo" />
        <LogoApplicationContainer alignItems="center" justifyItems="center">
          <ApplicationIcon
            defaultIcon={defaultIcon}
            id="loginApplicationIcon"
          />
        </LogoApplicationContainer>
      </LoginHeader>
      <LoginBodyTop id="loginBodyTop">
        <ApplicationContainer gap="8px" id="applicationContainer">
          {applicationNameVisible && (
            <ApplicationName>{appName}</ApplicationName>
          )}
          <VersionNumber logging={logging}>{version}</VersionNumber>
        </ApplicationContainer>
      </LoginBodyTop>

      <Form noValidate onSubmit={handleSubmit}>
        <LoginBody gap="8px" id="loginBody">
          <CssGridCell
            alignItems="center"
            columns="auto 1fr"
            gap="16px 16px"
            justifyContent="flex-start"
            padding="0px"
            vertical>
            <UsernameIcon />
            <TextField
              className="username"
              id="username"
              InputLabelProps={{ shrink: true }}
              label="Username"
              margin="normal"
              onChange={usernameChangeProps}
              variant="outlined"
            />
            <PasswordIcon />
            <TextField
              className="password"
              id="password"
              InputLabelProps={{ shrink: true }}
              label="Password"
              margin="normal"
              onChange={passwordChangeProps}
              type="password"
              variant="outlined"
            />
          </CssGridCell>
          <CssGridCell
            alignItems="center"
            columns="18px 1fr auto"
            gap="16px 16px"
            justifyContent="flex-start"
            padding="0 0 16px 0px"
            vertical>
            <div />
            <FormControlLabel
              control={<Checkbox color="primary" value="remember" />}
              label="Remember me"
            />
            <IconButton color="secondary">
              <Icon
                path={mdiHelpCircleOutline}
                size="18px"
                title="Forgot Password"
              />
            </IconButton>
          </CssGridCell>
        </LoginBody>
        <ButtonBar justifyContent="center">
          <LoginButton
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant={submitButtonVariant}>
            {submitButtonText}
          </LoginButton>
        </ButtonBar>
      </Form>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </LoginPanel>
  </LoginContainer>
);
