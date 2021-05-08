import { createGlobalStyle, css } from 'styled-components';

export const AgTableStyle = createGlobalStyle`${css`
  .ag-root-wrapper {
    background-color: transparent !important;
    && {
      color: ${({ theme }) => theme.tableHeaderBg};
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: ${({ theme }) => theme.fontBase};
      line-height: 1rem;

      .ag-body-viewport {
        background-color: ${({ theme }) => theme.tableBg};
      }

      .ag-header {
        box-shadow: ${({ theme }) => theme.tableHeaderShadow};
        z-index: 1;
        background-color: ${({ theme }) => theme.tableHeaderBg};
        border-bottom: solid ${({ theme }) => theme.tableHeaderBorderWidth}px;
        border-bottom-color: ${({ theme }) => theme.tableHeaderBorder};
      }

      .ag-header-row {
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontBase};
        font-weight: 400;
        color: ${({ theme }) => theme.tableHeaderText};
        border-bottom: ${({ theme }) => theme.tableRowBorderWidth}px;
        border-color: ${({ theme }) => theme.tableRowBorder} !important;
      }

      .ag-header-cell {
        &.ag-header-cell-moving {
          background-color: ${({ theme }) =>
            theme.tableHeaderMovingBg} !important;
          color: ${({ theme }) => theme.tableHeaderMovingText};
        }

        &:hover {
          background-color: ${({ theme }) => theme.tableHeaderBg} !important;
          .ag-header-cell-menu-button {
            width: auto;
            display: inherit;
            opacity: 1;
          }
        }
      }

      .ag-header-icon {
        margin-left: 0px !important;
        display: grid;
        align-items: center;
        justify-content: center;

        & > svg {
          min-width: 18px;
          width: 18px;
          line-height: normal;

          > path {
            fill: ${({ theme }) => theme.tableHeaderText};
          }
        }

        .svg-icon-filter,
        .svg-icon-sort-ascending,
        .svg-icon-sort-decending {
          > path {
            fill: ${({ theme }) => theme.tablePrimaryIcon};
          }
        }
      }

      .ag-header-cell-menu-button {
        width: 0px;
        display: none;
      }

      .ag-header-cell-text {
        text-transform: capitalize;
      }

      .ag-ltr .ag-cell {
        border-color: ${({ theme }) => theme.tableBorder};
        &-focus {
          border-color: ${({ theme }) =>
            theme.tableSelectedCellBorder} !important;
        }
      }

      .ag-row {
        background-color: ${({ theme }) => theme.tableRowBg};
        color: ${({ theme }) => theme.tableRowText};
        border-width: ${({ theme }) => theme.tableRowBorderWidth}px;
        border-color: ${({ theme }) => theme.tableRowBorder};
        font-weight: 400;

        &-even {
          background-color: ${({ theme }) => theme.tableRowEvenBg};
        }

        &.ag-row-focus {
          background-color: ${({ theme }) => theme.tableFocusRowBg} !important;
          color: ${({ theme }) => theme.tableFocusRowText};
        }
      }

      .ag-overlay-loading-wrapper {
        background-color: ${({ theme }) =>
          theme.tableLoadingOverlayBg} !important;
        .ag-overlay-loading-center {
          background: ${({ theme }) => theme.tableLoadingBg};
          color: ${({ theme }) => theme.tableLoadingText};
          font-style: italic;
          border: ${({ theme }) =>
            `${theme.tableLoadingBorderWidth}px solid ${theme.tableLoadingBorder}`};
          border-radius: 50px;
          box-shadow: ${({ theme }) => theme.tableLoadingShadow};
          padding: 8px;
        }
      }

      .ag-cell,
      .ag-header-cell,
      .ag-header-group-cell {
        padding-left: 4px;
        padding-right: 4px;
        line-height: 1.5rem;
        border-right: solid ${({ theme }) => theme.tableHeaderBorderWidth}px;
        border-right-color: ${({ theme }) => theme.tableBorder};
        border-top: 0px;
        border-bottom: 0px;

        &.align-center {
          text-align: center;
        }

        &.align-right {
          text-align: right;
        }

        &.positive-text-only {
          color: ${({ theme }) => theme.success[400]};
          font-weight: bold;
        }

        &.negative-text-only {
          color: ${({ theme }) => theme.important[400]};
          font-weight: bold;
        }

        &.buy-side {
          background-color: ${({ theme }) => theme.buy[400]};
          opacity: 0.2;

          &-text-only {
            color: ${({ theme }) => theme.buy[300]};
            font-weight: bold;
          }

          &-full {
            background-color: ${({ theme }) => theme.buy[400]};
            color: ${({ theme }) => theme.black[0]};
            font-weight: bold;
            text-align: center;
          }
        }

        &.sell-side {
          background-color: ${({ theme }) => theme.sell[400]};
          opacity: 0.2;

          &-text-only {
            color: ${({ theme }) => theme.sell[400]};
            font-weight: bold;
          }

          &-full {
            background-color: ${({ theme }) => theme.sell[400]};
            color: ${({ theme }) => theme.black[0]};
            font-weight: bold;
            text-align: center;
          }
        }

        &.no-value {
          font-style: italic;
          text-align: center;
          font-size: 0.95em;

          &-text-only {
            color: ${({ theme }) => theme.tableEmptyCellText};
          }

          &-full {
            background-color: ${({ theme }) => theme.tableEmptyCellBg};
            color: ${({ theme }) => theme.tableEmptyCellText};
          }
        }
      }

      .ag-pinned-left-header {
        border-right-width: ${({ theme }) => theme.tableFixedRowBorderWidth}px;
        border-right-color: ${({ theme }) => theme.tableFixedRowBorder};
        box-shadow: 2px 0 9px 0px rgba(0, 0, 0, 0.4);
      }

      .ag-pinned-left-cols-container {
        background-color: ${({ theme }) => theme.tableFixedBg};
        border-right: ${({ theme }) => theme.tableFixedRowBorderWidth}px solid;
        border-right-color: ${({ theme }) => theme.tableFixedRowBorder};
        box-shadow: 7px 0 9px -7px rgba(0, 0, 0, 0.8);
        z-index: 9;

        .ag-cell-last-left-pinned {
          border-right-width: 0px !important;
          border-right-color: transparent;
        }
      }

      .ag-checkbox-input-wrapper {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 14px;
        line-height: 1.5rem;

        input {
          -webkit-appearance: none;
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        &::after {
          font-family: 'agGridMaterial';
          content: '\f108';
          color: ${({ theme }) => theme.tableCheckBoxBg};
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        &.ag-indeterminate::after {
          content: '\f107';
          color: ${({ theme }) => theme.tableCheckBoxIndeterminateBg};
        }

        &.ag-checked::after {
          content: '\f106';
          color: ${({ theme }) => theme.tableCheckBoxSelectedBg};
        }
      }

      .ag-cell-inline-editing {
        padding: 0 4px;
        height: auto;
        border-color: ${({ theme }) =>
          theme.tableSelectedCellBorder} !important;
        background: ${({ theme }) => theme.tableSelectedCellBg};
        border-radius: 0px;
        box-shadow: '0px 2px 4px -1px rgba(0,0,0,0.3),0px 4px 5px 0px rgba(0,0,0,0.24),0px 1px 10px 0px rgba(0,0,0,0.22)';
      }

      input[class^='ag-']:not([type]),
      input[class^='ag-'][type='text'],
      input[class^='ag-'][type='number'],
      input[class^='ag-'][type='tel'],
      input[class^='ag-'][type='date'],
      input[class^='ag-'][type='datetime-local'],
      textarea[class^='ag-'] {
        height: auto;
        background: ${({ theme }) => theme.tableSelectedInputBg};
        color: ${({ theme }) => theme.tableSelectedInputtext};
        font-style: italic;
        padding: 1px;
        border-width: 0;
        border-bottom: 0px solid;
        border-bottom-color: ${({ theme }) => theme.tableSelectedInputBorder};
      }

      .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {
        height: auto;
      }

      .ag-ltr {
        .ag-row-drag,
        .ag-selection-checkbox,
        .ag-group-expanded,
        .ag-group-contracted {
          margin-right: 8px;
        }

        .ag-header-select-all {
          margin-right: 8px;
          margin-left: 1px;
        }
      }

      .ag-menu-option-active {
        background-color: #2661ad;
        color: white;
      }

      // filter
      .ag-menu {
        border: ${({ theme }) => theme.tableFilterMenuBorderWidth}px solid;
        border-color: ${({ theme }) => theme.tableFilterMenuBorder};
        border-radius: 4px;

        .ag-filter-body-wrapper {
          padding: 12px 12px 4px 12px;
          background-color: ${({ theme }) => theme.tableFilterMenuBg};
          color: white !important;

          > * {
            margin-bottom: 8px;
          }

          .ag-select:not(.ag-cell-editor) {
            height: auto;
          }

          .ag-input-wrapper,
          .ag-picker-field-wrapper {
            background-color: ${({ theme }) =>
              theme.defaultTextFieldBg} !important;
            border: 0px solid;
            min-height: 26px;
            border-radius: ${({ theme }) =>
              theme.defaultTextFieldBorderRadius}px;
            padding: 4px 4px 4px 8px;

            .ag-picker-field-display {
              margin: 0px 4px 0px 0px;
            }
          }

          input::placeholder {
            color: ${({ theme }) => theme.defaultTextFieldLabel} !important;
          }

          .ag-filter-condition {
            padding-top: 8px;
            border-top: ${({ theme }) => theme.tableFilterMenuBorderWidth}px
              solid;
            border-color: ${({ theme }) => theme.tableFilterMenuBorder};
          }

          .ag-radio-button-input-wrapper {
            min-height: auto !important;
            &.ag-checked::after {
              color: ${({ theme }) => theme.tableCheckBoxSelectedBg};
            }
          }

          // icons
          [class^='svg-icon-'] {
            height: 18px;
            width: 18px;
            display: flex;
          }
        }
      }
    }
  }

  .ag-theme-material {
    font-family: ${({ theme }) => theme.fontFamily} !important;
    font-size: ${({ theme }) => theme.fontBase} !important;
  }

  .ag-theme-material.ag-dnd-ghost {
    background-color: ${({ theme }) => theme.tableHeaderDnDGhostBg} !important;
    height: auto !important;
    line-height: normal !important;
    margin: 0 !important;
    padding: 8px 16px !important;

    .ag-dnd-ghost-label,
    .ag-dnd-ghost-icon {
      color: ${({ theme }) => theme.tableHeaderDnDGhostText} !important;
    }
  }
`}`;
