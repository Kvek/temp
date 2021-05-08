import { createGlobalStyle, css } from 'styled-components';

export const StatusStyle = createGlobalStyle`${css`
  && {
    .status-cell {
      align-items: center;
      display: inline-grid;
      grid-auto-flow: column;
      text-transform: uppercase;

      &.closed {
        color: ${({ theme }) => theme.status.closed};
      }
      &.open {
        color: ${({ theme }) => theme.status.open};
      }
      &.halted {
        color: ${({ theme }) => theme.status.halted};
      }
      &.pre_open {
        color: ${({ theme }) => theme.status.preOpen};
      }
      &.pre_close {
        color: ${({ theme }) => theme.status.preClose};
      }
      &.request_rejected {
        color: ${({ theme }) => theme.status.requestRejected};
      }

      &.buy {
        color: ${({ theme }) => theme.status.buy};
      }
      &.sell {
        color: ${({ theme }) => theme.status.sell};
      }
      &.new {
        color: ${({ theme }) => theme.status.new};
      }
      &.part_filled {
        color: ${({ theme }) => theme.status.partFilled};
      }
      &.filled {
        color: ${({ theme }) => theme.status.filled};
      }
      &.canceled {
        color: ${({ theme }) => theme.status.cancelled};
      }
      &.pending_cancel {
        color: ${({ theme }) => theme.status.pendingCancel};
      }
      &.rejected {
        color: ${({ theme }) => theme.status.rejected};
      }
      &.pending_new {
        color: ${({ theme }) => theme.status.pendingNew};
      }
      &.restatement {
        color: ${({ theme }) => theme.status.restatement};
      }
      &.pending_amend {
        color: ${({ theme }) => theme.status.pending};
      }
      &.trade_correct {
        color: ${({ theme }) => theme.status.corrected};
      }
      &.trade_cancel {
        color: ${({ theme }) => theme.status.tradeCancel};
      }
      &.trade_released_clearing {
        color: ${({ theme }) => theme.status.completed};
      }
      &.expired {
        color: ${({ theme }) => theme.status.expired};
      }
      &.suspended {
        color: ${({ theme }) => theme.status.pending};
      }
      &.replaced {
        color: ${({ theme }) => theme.status.replaced};
      }
      &.sending {
        color: ${({ theme }) => theme.status.sending};
      }
      &.trade {
        color: ${({ theme }) => theme.status.trade};
      }
      &.unknown {
        color: ${({ theme }) => theme.status.unknown};
      }
      &.triggered_or_activated_by_system {
        color: ${({ theme }) => theme.status.completed};
      }
      &.order_status {
        color: ${({ theme }) => theme.status.orderStatus};
      }
      &.done_for_day {
        color: ${({ theme }) => theme.status.doneForDay};
      }
      &.calculated {
        color: ${({ theme }) => theme.status.calculated};
      }

      &.corrected {
        color: ${({ theme }) => theme.status.corrected};
      }
      &.completed {
        color: ${({ theme }) => theme.status.completed};
      }
      &.accepted {
        color: ${({ theme }) => theme.status.accepted};
      }
      &.working {
        color: ${({ theme }) => theme.status.working};
      }
      &.amended {
        color: ${({ theme }) => theme.status.amended};
      }
      &.pending {
        color: ${({ theme }) => theme.status.pending};
      }
      &.balance_canceled {
        color: ${({ theme }) => theme.status.balanceCancelled};
      }
      &.part_canceled {
        color: ${({ theme }) => theme.status.partCancelled};
      }

      &.outlined {
        border: 1px solid;
        border-radius: 50px;
        padding: 2px 4px;

        &.closed {
          border-color: ${({ theme }) => theme.status.closed};
        }
        &.open {
          border-color: ${({ theme }) => theme.status.open};
        }
        &.halted {
          border-color: ${({ theme }) => theme.status.halted};
        }
        &.pre_open {
          border-color: ${({ theme }) => theme.status.preOpen};
        }
        &.pre_close {
          border-color: ${({ theme }) => theme.status.preClose};
        }
        &.request_rejected {
          border-color: ${({ theme }) => theme.status.requestRejected};
        }

        &.buy {
          border-color: ${({ theme }) => theme.status.buy};
        }
        &.sell {
          border-color: ${({ theme }) => theme.status.sell};
        }
        &.new {
          border-color: ${({ theme }) => theme.status.new};
        }
        &.part_filled {
          border-color: ${({ theme }) => theme.status.partFilled};
        }
        &.filled {
          border-color: ${({ theme }) => theme.status.filled};
        }
        &.canceled {
          border-color: ${({ theme }) => theme.status.cancelled};
        }
        &.pending_cancel {
          border-color: ${({ theme }) => theme.status.pendingCancel};
        }
        &.rejected {
          border-color: ${({ theme }) => theme.status.rejected};
        }
        &.pending_new {
          border-color: ${({ theme }) => theme.status.pendingNew};
        }
        &.restatement {
          border-color: ${({ theme }) => theme.status.restatement};
        }
        &.pending_amend {
          border-color: ${({ theme }) => theme.status.pending};
        }
        &.trade_correct {
          border-color: ${({ theme }) => theme.status.corrected};
        }
        &.trade_cancel {
          border-color: ${({ theme }) => theme.status.tradeCancel};
        }
        &.trade_released_clearing {
          border-color: ${({ theme }) => theme.status.completed};
        }
        &.expired {
          border-color: ${({ theme }) => theme.status.expired};
        }
        &.suspended {
          border-color: ${({ theme }) => theme.status.pending};
        }
        &.replaced {
          border-color: ${({ theme }) => theme.status.replaced};
        }
        &.sending {
          border-color: ${({ theme }) => theme.status.sending};
        }
        &.trade {
          border-color: ${({ theme }) => theme.status.trade};
        }
        &.unknown {
          border-color: ${({ theme }) => theme.status.unknown};
        }
        &.triggered_or_activated_by_system {
          border-color: ${({ theme }) => theme.status.completed};
        }
        &.order_status {
          border-color: ${({ theme }) => theme.status.orderStatus};
        }
        &.done_for_day {
          border-color: ${({ theme }) => theme.status.doneForDay};
        }
        &.calculated {
          border-color: ${({ theme }) => theme.status.calculated};
        }

        &.corrected {
          border-color: ${({ theme }) => theme.status.corrected};
        }
        &.completed {
          border-color: ${({ theme }) => theme.status.completed};
        }
        &.accepted {
          border-color: ${({ theme }) => theme.status.accepted};
        }
        &.working {
          border-color: ${({ theme }) => theme.status.working};
        }
        &.amended {
          border-color: ${({ theme }) => theme.status.amended};
        }
        &.pending {
          border-color: ${({ theme }) => theme.status.pending};
        }
        &.balance_canceled {
          border-color: ${({ theme }) => theme.status.balanceCancelled};
        }
        &.part_canceled {
          border-color: ${({ theme }) => theme.status.partCancelled};
        }
      }
    }
  }
`}`;
