import { FormControlProps, ListItemProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

import React, { FC, MouseEventHandler, ReactNode } from 'react';

import {
  SecondaryAction,
  SideListContainer,
  StyledListItem,
} from './Sidelist.styles';

export interface SideListInterface extends FormControlProps {}

interface SideListItemDefaultInterface {
  onDelete: MouseEventHandler<SVGSVGElement> | undefined;
  text: ReactNode;
}

export interface SideListItemInterface
  extends SideListItemDefaultInterface,
    ListItemProps<'div', { button?: true }> {}

export const SideList: FC<SideListInterface> = (props) => (
  <SideListContainer {...props} />
);

export const SideListItem = ({
  onDelete,
  selected,
  text,
  ...props
}: SideListItemInterface) => (
  <StyledListItem button dense disableGutters selected={selected} {...props}>
    <ListItemText primary={text} />
    {selected && (
      <SecondaryAction>
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small" onClick={onDelete} />
        </IconButton>
      </SecondaryAction>
    )}
  </StyledListItem>
);
