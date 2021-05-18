import { MenuItem, TextFieldProps } from '@material-ui/core';
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { mdiAlertCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

import React, { FC } from 'react';

import { CssGridCell } from '../Grid';
import {
  FormHelperText,
  GridTextField as GTextField,
  SmallTextField as STextField,
  StyledMuiCheckBox,
  StyledTextField,
  TransparentInputBase,
} from './Inputs.styles';

export interface HelperTextInterface {
  error?: boolean;
  helperText?: React.ReactNode;
  required?: boolean;
}

export type FormTextFieldType = {
  buttonPadding?: string;
  double?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  hideValue?: boolean;
  required?: boolean;
} & TextFieldProps;

export const HelperText = ({
  error,
  helperText,
  required,
}: HelperTextInterface) => (
  <FormHelperText error={error || false} id="HelperText">
    {error ? (
      <CssGridCell width="18px">
        <Icon path={mdiAlertCircleOutline} size={1} title="Error" />
      </CssGridCell>
    ) : null}

    {required ? (
      <FormHelperText id="component-error-text">* Required</FormHelperText>
    ) : null}

    <FormHelperText id="component-error-text">{helperText}</FormHelperText>
  </FormHelperText>
);

export const FormTextField = ({
  children,
  error,
  helperText,
  hideValue,
  required,
  select,
  type,
  value,
  ...props
}: FormTextFieldType) => (
  <CssGridCell cell rows="1fr auto">
    <StyledTextField
      fullWidth
      InputLabelProps={{ shrink: true }}
      margin="dense"
      multiline={!!(type !== 'number' && !select)}
      placeholder="- -"
      select={select}
      value={hideValue ? '' : value}
      {...props}>
      {select ? children || <MenuItem>N/A</MenuItem> : children}
    </StyledTextField>

    <HelperText error={error} helperText={helperText} required={required} />
  </CssGridCell>
);

export const GridTextField = (props: FormTextFieldType) => (
  <GTextField
    className="small"
    InputLabelProps={{ shrink: true }}
    InputProps={{ disableUnderline: true }}
    margin="none"
    size="small"
    {...props}
  />
);

export const SmallTextField = (props: TextFieldProps) => (
  <STextField
    InputLabelProps={{
      shrink: true,
    }}
    margin="none"
    variant="outlined"
    {...props}
  />
);

export const ListItemInput: FC<TextFieldProps> = (props) => (
  <TransparentInputBase
    fullWidth
    InputLabelProps={{ shrink: true }}
    InputProps={{ disableUnderline: true }}
    label=""
    margin="none"
    variant="standard"
    {...props}
  />
);

export const StyledCheckBox: FC<CheckboxProps> = (props) => (
  <StyledMuiCheckBox {...props} />
);
