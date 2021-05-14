import { ExpansionPanelSummaryProps } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Variant } from '@material-ui/core/styles/createTypography';
import Icon from '@mdi/react';

import React, { ReactNode } from 'react';

import { CssGridCell } from '../Grid';
import {
  SettingsRowContainer,
  SettingsRowTitle,
  SHeaderExpansion,
  SHeaderTitle,
} from './Settings.styles';

export interface SettingsHeaderExpansionInterface
  extends ExpansionPanelSummaryProps {
  icon: string | null;
  title: string;
  variant?: 'inherit' | Variant | undefined;
}

export interface SettingsRowInterface {
  children: ReactNode;
  noDivider?: boolean;
  title: string;
}

export const SettingsHeaderExpansion = ({
  icon,
  title,
  variant,
}: SettingsHeaderExpansionInterface) => (
  <SHeaderExpansion>
    <CssGridCell
      alignItems="center"
      cell
      columns="[title] auto [right] 1fr"
      gap="4px"
      horizontal
      justifyContent="flex-start">
      {icon && <Icon path={icon} size={1} style={{ marginRight: '4px' }} />}
      <SHeaderTitle variant={variant}>{title}</SHeaderTitle>
    </CssGridCell>
  </SHeaderExpansion>
);

export const SettingsRow = ({
  children,
  noDivider = true,
  title,
}: SettingsRowInterface) => (
  <>
    <SettingsRowContainer
      alignCenter
      columns="1fr auto"
      gap="8px"
      horizontal
      justifyLeft
      padding="0 8px">
      <SettingsRowTitle color="textSecondary" variant="body1">
        {title}
      </SettingsRowTitle>
      {children}
    </SettingsRowContainer>
    {noDivider ? null : <Divider light />}
  </>
);
