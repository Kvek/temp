import {
  mdiBackspaceOutline,
  mdiBriefcaseEditOutline,
  mdiBriefcaseOutline,
  mdiCheckAll,
  mdiCheckboxMarkedCircle,
  mdiCheckboxMarkedCircleOutline,
  mdiCheckOutline,
  mdiCircle,
  mdiClose,
  mdiCloseCircleOutline,
  mdiFileHidden,
  mdiFileReplaceOutline,
  mdiMinusCircleOutline,
  mdiNewBox,
  mdiProgressAlert,
  mdiProgressCheck,
  mdiProgressClock,
  mdiProgressDownload,
} from '@mdi/js';
import { IconProps } from '@mdi/react/dist/IconProps';

import React, { ReactNode } from 'react';

import { CssGridCell, GridCellInterface } from '../Grid';
import {
  StatusIcon,
  StyledStatusChip,
  StyledStatusText,
} from './Status.styles';

export interface StatusTextDefaultInterface {
  children?: ReactNode;
  outlined?: boolean;
  status:
    | 'filled'
    | 'new'
    | 'trade'
    | 'corrected'
    | 'part-filled'
    | 'completed'
    | 'accepted'
    | 'working'
    | 'amended'
    | 'pending'
    | 'pending-new'
    | 'pending-cancel'
    | 'balance-cancelled'
    | 'part-cancelled'
    | 'cancelled'
    | 'replaced'
    | 'rejected'
    | 'buy'
    | 'sell';
}

export interface StatusInterface extends StatusTextDefaultInterface {}

export interface StatusIconInterface extends StatusInterface, IconProps {}

export interface StatusSubtleDotInterface
  extends GridCellInterface,
    StatusIconInterface,
    IconProps {
  position: 'before' | 'after';
}

export const StatusChip = ({ children, outlined, status }: StatusInterface) => (
  <StyledStatusChip outlined={outlined} status={status}>
    {children}
  </StyledStatusChip>
);

export const StatusText = ({ children, outlined, status }: StatusInterface) => (
  <StyledStatusText outlined={outlined} status={status}>
    {children}
  </StyledStatusText>
);

export const StatusTextWithIcon = ({
  children,
  outlined,
  status,
}: StatusInterface) => (
  <StatusText outlined={outlined} status={status}>
    {status === 'buy' || status === 'sell' ? null : (
      <StatusIcon
        path={
          (status === 'filled' && mdiCheckboxMarkedCircleOutline) ||
          (status === 'new' && mdiNewBox) ||
          (status === 'trade' && mdiBriefcaseOutline) ||
          (status === 'corrected' && mdiCheckAll) ||
          (status === 'part-filled' && mdiProgressDownload) ||
          (status === 'completed' && mdiCheckboxMarkedCircle) ||
          (status === 'accepted' && mdiCheckOutline) ||
          (status === 'working' && mdiProgressCheck) ||
          (status === 'amended' && mdiBriefcaseEditOutline) ||
          (status === 'pending' && mdiProgressClock) ||
          (status === 'pending-new' && mdiFileHidden) ||
          (status === 'pending-cancel' && mdiProgressAlert) ||
          (status === 'balance-cancelled' && mdiBackspaceOutline) ||
          (status === 'part-cancelled' && mdiMinusCircleOutline) ||
          (status === 'cancelled' && mdiClose) ||
          (status === 'replaced' && mdiFileReplaceOutline) ||
          (status === 'rejected' && mdiCloseCircleOutline) ||
          ''
        }
        size={0.8}
        status={status}
        title={status}
      />
    )}
    {children}
  </StatusText>
);

export const StatusSubtleDot = ({
  children,
  position,
  status,
}: StatusSubtleDotInterface) => (
  <CssGridCell
    alignContent="center"
    alignItems="center"
    autoColumns="auto"
    gap="4px"
    horizontal
    justifyContent="flex-start">
    {position === 'after' ? (
      <>
        {children}
        <StatusIcon path={mdiCircle} size={0.5} status={status} />
      </>
    ) : (
      <>
        <StatusIcon path={mdiCircle} size={0.5} status={status} />
        {children}
      </>
    )}
  </CssGridCell>
);
