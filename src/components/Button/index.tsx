import { ButtonProps, IconButtonProps } from '@material-ui/core';
import {
  mdiContentSave,
  mdiDeleteOutline,
  mdiPlus,
  mdiPlusBoxOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

import React, { FC } from 'react';

import {
  CreateBtn,
  CreateIconBtn,
  DeleteBtn,
  NavIconBtn,
  SaveBtn,
} from './Button.styles';

export interface CreateButtonInterface extends ButtonProps {
  icon: string;
  title: string;
}

export interface IconButtonInterface extends IconButtonProps {
  icon?: string;
  title?: string;
}

export const NavIconButton: FC<IconButtonInterface> = (props) => (
  <NavIconBtn {...props} />
);

export const SaveButton: FC<ButtonProps> = ({ children, ...props }) => (
  <SaveBtn variant="contained" {...props}>
    <Icon path={mdiContentSave} size="24px" title="Save" />
    Save
    {children}
  </SaveBtn>
);

export const DeleteButton: FC<ButtonProps> = ({ children, ...props }) => (
  <DeleteBtn variant="outlined" {...props}>
    <Icon path={mdiDeleteOutline} size="18px" title="Delete" />
    Delete
    {children}
  </DeleteBtn>
);

export const CreateButton = ({
  icon,
  title,
  ...props
}: CreateButtonInterface) => (
  <CreateBtn color="primary" size="medium" variant="contained" {...props}>
    <Icon path={icon || mdiPlusBoxOutline} size={1} title="Create" />
    {title || 'Create'}
  </CreateBtn>
);

export const CreateIconButton = ({
  icon,
  title,
  ...props
}: IconButtonInterface) => (
  <CreateIconBtn color="primary" {...props}>
    <Icon path={icon || mdiPlus} size={1.2} title="Create" />
    {title}
  </CreateIconBtn>
);
