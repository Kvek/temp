import Icon from '@mdi/react';

import styled from 'styled-components';

import { StatusIconInterface, StatusInterface } from '.';

export const StyledStatusChip = styled.div<StatusInterface>`
  && {
    background-color: transparent;
    border-color: ${({ status, theme: { black, status: themeStatus } }) => {
      if (status === 'buy') return themeStatus.buy;
      if (status === 'sell') return themeStatus.sell;
      if (status === 'filled') return themeStatus.filled;
      if (status === 'new') return themeStatus.new;
      if (status === 'trade') return themeStatus.trade;
      if (status === 'corrected') return themeStatus.corrected;
      if (status === 'part-filled') return themeStatus.partFilled;
      if (status === 'completed') return themeStatus.completed;
      if (status === 'accepted') return themeStatus.accepted;
      if (status === 'working') return themeStatus.working;
      if (status === 'amended') return themeStatus.amended;
      if (status === 'pending') return themeStatus.pending;
      if (status === 'pending-new') return themeStatus.pendingNew;
      if (status === 'pending-cancel') return themeStatus.pendingCancel;
      if (status === 'balance-cancelled') return themeStatus.balanceCancelled;
      if (status === 'part-cancelled') return themeStatus.partCancelled;
      if (status === 'cancelled') return themeStatus.cancelled;
      if (status === 'replaced') return themeStatus.replaced;
      if (status === 'rejected') return themeStatus.rejected;
      return black[50];
    }};
    border-left: 3px solid transparent;
    color: ${({ status, theme: { black, status: themeStatus } }) => {
      if (status === 'buy') return themeStatus.buy;
      if (status === 'sell') return themeStatus.sell;
      if (status === 'filled') return themeStatus.filled;
      if (status === 'new') return themeStatus.new;
      if (status === 'trade') return themeStatus.trade;
      if (status === 'corrected') return themeStatus.corrected;
      if (status === 'part-filled') return themeStatus.partFilled;
      if (status === 'completed') return themeStatus.completed;
      if (status === 'accepted') return themeStatus.accepted;
      if (status === 'working') return themeStatus.working;
      if (status === 'amended') return themeStatus.amended;
      if (status === 'pending') return themeStatus.pending;
      if (status === 'pending-new') return themeStatus.pendingNew;
      if (status === 'pending-cancel') return themeStatus.pendingCancel;
      if (status === 'balance-cancelled') return themeStatus.balanceCancelled;
      if (status === 'part-cancelled') return themeStatus.partCancelled;
      if (status === 'cancelled') return themeStatus.cancelled;
      if (status === 'replaced') return themeStatus.replaced;
      if (status === 'rejected') return themeStatus.rejected;
      return black[50];
    }};
    font-weight: ${({ theme }) => theme.fontWeightB};
    letter-spacing: ${({ theme }) => theme.letterSpacingLg};
    min-width: 41px;
    padding: 2px 8px;
    text-transform: uppercase;
    width: auto;
  }
`;

export const StyledStatusText = styled.p<StatusInterface>`
  && {
    align-content: center;
    color: ${({ status, theme: { black, status: themeStatus } }) => {
      if (status === 'buy') return themeStatus.buy;
      if (status === 'sell') return themeStatus.sell;
      if (status === 'filled') return themeStatus.filled;
      if (status === 'new') return themeStatus.new;
      if (status === 'trade') return themeStatus.trade;
      if (status === 'corrected') return themeStatus.corrected;
      if (status === 'part-filled') return themeStatus.partFilled;
      if (status === 'completed') return themeStatus.completed;
      if (status === 'accepted') return themeStatus.accepted;
      if (status === 'working') return themeStatus.working;
      if (status === 'amended') return themeStatus.amended;
      if (status === 'pending') return themeStatus.pending;
      if (status === 'pending-new') return themeStatus.pendingNew;
      if (status === 'pending-cancel') return themeStatus.pendingCancel;
      if (status === 'balance-cancelled') return themeStatus.balanceCancelled;
      if (status === 'part-cancelled') return themeStatus.partCancelled;
      if (status === 'cancelled') return themeStatus.cancelled;
      if (status === 'replaced') return themeStatus.replaced;
      if (status === 'rejected') return themeStatus.rejected;
      return black[50];
    }};
    display: inline-grid;
    grid-auto-flow: column;
    text-transform: uppercase;
    vertical-align: middle;

    ${({ outlined, status, theme: { black, status: themeStatus } }) => {
      if (outlined) {
        return `
        border-style: solid;
        border-width: 1px;
        border-radius: 50px;
        padding: 5px;
        border-color: ${() => {
          if (status === 'buy') return themeStatus.buy;
          if (status === 'sell') return themeStatus.sell;
          if (status === 'filled') return themeStatus.filled;
          if (status === 'new') return themeStatus.new;
          if (status === 'trade') return themeStatus.trade;
          if (status === 'corrected') return themeStatus.corrected;
          if (status === 'part-filled') return themeStatus.partFilled;
          if (status === 'completed') return themeStatus.completed;
          if (status === 'accepted') return themeStatus.accepted;
          if (status === 'working') return themeStatus.working;
          if (status === 'amended') return themeStatus.amended;
          if (status === 'pending') return themeStatus.pending;
          if (status === 'pending-new') return themeStatus.pendingNew;
          if (status === 'pending-cancel') return themeStatus.pendingCancel;
          if (status === 'balance-cancelled') {
            return themeStatus.balanceCancelled;
          }
          if (status === 'part-cancelled') return themeStatus.partCancelled;
          if (status === 'cancelled') return themeStatus.cancelled;
          if (status === 'replaced') return themeStatus.replaced;
          if (status === 'rejected') return themeStatus.rejected;
          return black[50];
        }};`;
      }
      return null;
    }};
  }
`;

export const StatusIcon = styled(Icon)<StatusIconInterface>`
  && {
    fill: ${({ status, theme: { black, status: themeStatus } }) => {
      if (status === 'buy') return themeStatus.buy;
      if (status === 'sell') return themeStatus.sell;
      if (status === 'filled') return themeStatus.filled;
      if (status === 'new') return themeStatus.new;
      if (status === 'trade') return themeStatus.trade;
      if (status === 'corrected') return themeStatus.corrected;
      if (status === 'part-filled') return themeStatus.partFilled;
      if (status === 'completed') return themeStatus.completed;
      if (status === 'accepted') return themeStatus.accepted;
      if (status === 'working') return themeStatus.working;
      if (status === 'amended') return themeStatus.amended;
      if (status === 'pending') return themeStatus.pending;
      if (status === 'pending-new') return themeStatus.pendingNew;
      if (status === 'pending-cancel') return themeStatus.pendingCancel;
      if (status === 'balance-cancelled') return themeStatus.balanceCancelled;
      if (status === 'part-cancelled') return themeStatus.partCancelled;
      if (status === 'cancelled') return themeStatus.cancelled;
      if (status === 'replaced') return themeStatus.replaced;
      if (status === 'rejected') return themeStatus.rejected;
      return black[50];
    }};
    margin-right: 4px;
  }
`;

export const SideChip = styled(StyledStatusChip)`
  && {
    border: 1px solid transparent;
  }
`;
