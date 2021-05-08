import {
  mdiContentSave,
  mdiDeleteOutline,
  mdiPlus,
  mdiPlusBoxOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

import React, { useState } from 'react';

import './button.css';

import {
  CreateBtn,
  CreateIconBtn,
  DeleteBtn,
  GridButton as StyledGridButton,
  LoginButton as StyledLoginButton,
  NavIconBtn,
  OnOffButton as StyledOnOffButton,
  SaveBtn,
} from './Button.styles';

export const GreenButton = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>{value}</div>
      <button
        onClick={() => setValue((prevState) => prevState + 1)}
        style={{ background: 'green' }}
        type="button">
        UPDATE
      </button>
    </div>
  );
};

export const NavIconButton = (props) => (
  <NavIconBtn {...props}>{props.children}</NavIconBtn>
);

export const GridButton = (props) => (
  <StyledGridButton {...props}>{props.children}</StyledGridButton>
);

export const OnOffButton = (props) => (
  <StyledOnOffButton {...props}>{props.children}</StyledOnOffButton>
);

export const SaveButton = (props) => (
  <SaveBtn variant="contained" {...props}>
    <Icon path={mdiContentSave} size="24px" title="Save" />
    Save
    {props.children}
  </SaveBtn>
);

export const DeleteButton = (props) => {
  const useStyled = DeleteBtn();
  return (
    <DeleteBtn variant="outlined" {...props}>
      <Icon path={mdiDeleteOutline} size="18px" title="Delete" />
      Delete
      {props.children}
    </DeleteBtn>
  );
};

export const CreateButton = (props) => (
  <CreateBtn color="primary" size="medium" variant="contained" {...props}>
    <Icon
      path={props.icon ? props.icon : mdiPlusBoxOutline}
      size={1}
      title="Create"
    />
    {props.title ? props.title : 'Create'}
  </CreateBtn>
);

export const CreateIconButton = (props) => (
  <CreateIconBtn color="primary" {...props}>
    <Icon path={props.icon ? props.icon : mdiPlus} size={1.2} title="Create" />
    {props.title ? props.title : null}
  </CreateIconBtn>
);

export const LoginButton = (props) => (
  <StyledLoginButton
    color="primary"
    fullWidth
    size="large"
    type="submit"
    variant={props.submitButtonVariant}>
    {props.submitButtonText}
  </StyledLoginButton>
);
