import Chip from '@material-ui/core/Chip';
import { mdiCancel } from '@mdi/js';
import Icon from '@mdi/react';

import React, { ReactNode } from 'react';

import { CssGridCell } from '../Grid';
import { DisabledContainer, SubText } from './DisabledOverlay.styles';

export interface DisabledOverlayInterface {
  children?: ReactNode;
  icon?: string;
  instruction: string;
}

export interface DisabledOverlayTextOnlyInterface {
  children?: ReactNode;
  icon?: string;
  iconHidden?: boolean;
  instruction: string;
}

export const DisabledOverlay = ({
  children,
  icon,
  instruction,
}: DisabledOverlayInterface) => (
  <DisabledContainer
    alignItems="center"
    cell
    justifyItems="center"
    padding="16px">
    <CssGridCell gap="8px" height="auto" justifyCenter>
      <Chip
        icon={
          <Icon
            color="white"
            path={icon || mdiCancel}
            size={1.2}
            style={{ padding: '4px 4px 4px 0px' }}
          />
        }
        label="Disabled"
        variant="outlined"
      />
      <SubText color="textSecondary" variant="body1">
        {instruction}
      </SubText>
      {children}
    </CssGridCell>
  </DisabledContainer>
);

export const DisabledOverlayTextOnly = ({
  children,
  icon,
  iconHidden,
  instruction,
}: DisabledOverlayTextOnlyInterface) => (
  <DisabledContainer
    alignItems="center"
    cell
    justifyItems="center"
    padding="16px">
    <CssGridCell gap="4px" height="auto" justifyItems="center">
      {!iconHidden && (
        <Icon color="white" path={icon || mdiCancel} size={1.2} />
      )}
      <SubText color="textSecondary" variant="body1">
        {instruction}
      </SubText>
      {children}
    </CssGridCell>
  </DisabledContainer>
);
