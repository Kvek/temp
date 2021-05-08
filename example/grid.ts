import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const AgTableStyle = createGlobalStyle`

  .ag-root-wrapper{
    background-color: transparent !important;
    && {
    color: ${theme.theme_override.tableHeaderBg};
    font-family: ${theme.theme_override.fontFamily};
    font-size: ${theme.theme_override.fontBase};
    line-height: 1rem;

    .ag-body-viewport{
      background-color: ${theme.theme_override.tableBg};
    }

    .ag-header {
      box-shadow: ${theme.theme_override.tableHeaderShadow};
      z-index: 1;
      background-color: ${theme.theme_override.tableHeaderBg};
      border-bottom: solid ${theme.theme_override.tableHeaderBorderWidth}px;
      border-bottom-color: ${theme.theme_override.tableHeaderBorder};
    }
    
    .ag-header-row {
      font-weight: 400;
      font-size: ${theme.theme_override.fontBase};
      font-weight: 400;
      color: ${theme.theme_override.tableHeaderText};
      border-bottom: ${theme.theme_override.tableRowBorderWidth}px;
      border-color: ${theme.theme_override.tableRowBorder} !important;
    }
    
    .ag-header-cell{
      &.ag-header-cell-moving{
        background-color: ${theme.theme_override.tableHeaderMovingBg} !important;
        color: ${theme.theme_override.tableHeaderMovingText};
      }
      
      &:hover{
        background-color: ${theme.theme_override.tableHeaderBg} !important;
        .ag-header-cell-menu-button{
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
      
      & > svg 
      {
        min-width: 18px;
        width: 18px;
        line-height: normal;

        > path {
          fill: ${theme.theme_override.tableHeaderText};
        }
      }
        
      .svg-icon-filter,
      .svg-icon-sort-ascending,
      .svg-icon-sort-decending{
        > path{
          fill: ${theme.theme_override.tablePrimaryIcon};
        }
      }
    }
    
    .ag-header-cell-menu-button{
      width: 0px;
      display: none;
    }

    .ag-header-cell-text{
      text-transform: capitalize;
    }
    
    .ag-ltr .ag-cell{
      border-color: ${theme.theme_override.tableBorder};
      &-focus{
        border-color: ${theme.theme_override.tableSelectedCellBorder} !important;
      }
    }
    
    .ag-row {
      background-color: ${theme.theme_override.tableRowBg};
      color: ${theme.theme_override.tableRowText};
      border-width: ${theme.theme_override.tableRowBorderWidth}px;
      border-color: ${theme.theme_override.tableRowBorder};
      font-weight: 400;
      
      &-even {
        background-color: ${theme.theme_override.tableRowEvenBg};
      }
      
      &.ag-row-focus{
        background-color: ${theme.theme_override.tableFocusRowBg} !important;
        color: ${theme.theme_override.tableFocusRowText};
      }

      // &.market-price-sell{
      //   z-index: 2;
      //   &::before{
      //     content: 'MKT';
      //     font-size: 0.6rem;
      //     font-weight: 700;
      //     letter-spacing: 0.03em;
      //     color: ${theme.theme_override.transparentInverse[800]};
      //     padding: 0px 2px;
      //     border: 1px solid transparent;
      //     background-color: ${theme.theme_override.primary[900]};
      //     position: absolute;
      //     transform: translate(-50%, -50%);
      //     left: 50%;
      //     top: 0rem;
      //     z-index: 9999;
      //   }
      //   &::after{
      //     content: '.';
      //     color: transparent;
      //     position: absolute;
      //     top: -1px;
      //     width: 100%;
      //     height: 2px;
      //     background-image: linear-gradient(45deg, #3f51b5, ${theme.theme_override.sell[300]});
      //   }
      // }
    }

    .ag-overlay-loading-wrapper{
      background-color: ${theme.theme_override.tableLoadingOverlayBg} !important;
      .ag-overlay-loading-center{
        background: ${theme.theme_override.tableLoadingBg};
        color: ${theme.theme_override.tableLoadingText};
        font-style: italic;
        border: ${theme.theme_override.tableLoadingBorderWidth}px solid ${theme.theme_override.tableLoadingBorder};
        border-radius: 50px;
        box-shadow: ${theme.theme_override.tableLoadingShadow};
        padding: 8px;
      }
    }
    
    .ag-cell, 
    .ag-header-cell, 
    .ag-header-group-cell {
      padding-left: 4px;
      padding-right: 4px;
      line-height: 1.5rem;
      border-right: solid ${theme.theme_override.tableHeaderBorderWidth}px ;
      border-right-color: ${theme.theme_override.tableBorder};
      border-top: 0px ;
      border-bottom: 0px ;

      &.align-center{
        text-align: center;
      }

      &.align-right{
        text-align: right;
      }

      &.positive-text-only{
        color: ${theme.theme_override.success[400]};
        font-weight: bold;
      }

      &.negative-text-only{
        color: ${theme.theme_override.important[400]};
        font-weight: bold;
      }

      &.buy-side{
        background-color: ${theme.theme_override.buy[400]};
        opacity: 0.2;
        
        &-text-only{
          color: ${theme.theme_override.buy[300]};
          font-weight: bold;
        }

        &-full{
          background-color: ${theme.theme_override.buy[400]};
          color: ${theme.theme_override.black[0]};
          font-weight: bold;
          text-align: center;
        }
      }
      
      &.sell-side{
        background-color: ${theme.theme_override.sell[400]};
        opacity: 0.2;

        &-text-only{
          color: ${theme.theme_override.sell[400]};
          font-weight: bold;
        }
        
        &-full{
          background-color: ${theme.theme_override.sell[400]};
          color: ${theme.theme_override.black[0]};
          font-weight: bold;
          text-align: center;
        }
        
      }
      &.no-value{
        font-style: italic;
        text-align: center;
        font-size: 0.95em;
        &-text-only{
          color: ${theme.theme_override.tableEmptyCellText};
        }
        &-full{
          background-color: ${theme.theme_override.tableEmptyCellBg};
          color: ${theme.theme_override.tableEmptyCellText};
        }
      }
    }

    .ag-pinned-left-header{
      border-right-width: ${theme.theme_override.tableFixedRowBorderWidth}px;
      border-right-color: ${theme.theme_override.tableFixedRowBorder};
      box-shadow: 2px 0 9px 0px rgba(0,0,0,0.4);
    }
    
    .ag-pinned-left-cols-container{
      background-color: ${theme.theme_override.tableFixedBg};
      border-right: ${theme.theme_override.tableFixedRowBorderWidth}px solid;
      border-right-color: ${theme.theme_override.tableFixedRowBorder};
      box-shadow: 7px 0 9px -7px rgba(0,0,0,0.8);
      z-index: 9;
      
      .ag-cell-last-left-pinned {
        border-right-width: 0px !important;
        border-right-color: transparent;
      }
    }

    .ag-checkbox-input-wrapper{
      width: 1.5rem;
      height: 1.5rem;
      font-size: 14px;
      line-height: 1.5rem;

      input{
        -webkit-appearance: none;
        opacity: 0;
        width: 100%;
        height: 100%;
      }

      &::after{
        font-family: 'agGridMaterial';
        content: "\f108";
        color: ${theme.theme_override.tableCheckBoxBg};
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }

      &.ag-indeterminate::after{
        content: "\f107";
        color: ${theme.theme_override.tableCheckBoxIndeterminateBg};
      }

      &.ag-checked::after{
        content: "\f106";
        color: ${theme.theme_override.tableCheckBoxSelectedBg};
      }

    }

    .ag-cell-inline-editing{
      padding: 0 4px;
      height: auto;
      border-color: ${theme.theme_override.tableSelectedCellBorder} !important;
      background: ${theme.theme_override.tableSelectedCellBg};
      border-radius: 0px;
      box-shadow: "0px 2px 4px -1px rgba(0,0,0,0.3),0px 4px 5px 0px rgba(0,0,0,0.24),0px 1px 10px 0px rgba(0,0,0,0.22)";
    }

    input[class^='ag-']:not([type]), 
    input[class^='ag-'][type='text'], 
    input[class^='ag-'][type='number'], 
    input[class^='ag-'][type='tel'], 
    input[class^='ag-'][type='date'], 
    input[class^='ag-'][type='datetime-local'], 
    textarea[class^='ag-'] {
      height: auto;
      background: ${theme.theme_override.tableSelectedInputBg};
      color: ${theme.theme_override.tableSelectedInputtext};
      font-style: italic;
      padding: 1px;
      border-width: 0;
      border-bottom: 0px solid;
      border-bottom-color: ${theme.theme_override.tableSelectedInputBorder};
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
      
      .ag-header-select-all{
        margin-right: 8px;
        margin-left: 1px;
      }
    }

    .ag-menu-option-active {
      background-color: #2661ad;
      color: white;
    }

    // filter
    .ag-menu{
      border: ${theme.theme_override.tableFilterMenuBorderWidth}px solid;
      border-color: ${theme.theme_override.tableFilterMenuBorder};
      border-radius: 4px;

      .ag-filter-body-wrapper{
        padding: 12px 12px 4px 12px;
        background-color: ${theme.theme_override.tableFilterMenuBg};
        color: white !important;

        > *{
          margin-bottom: 8px;
        }

        .ag-select:not(.ag-cell-editor){
          height: auto;

        }

        .ag-input-wrapper, 
        .ag-picker-field-wrapper {
          background-color: ${theme.theme_override.defaultTextFieldBg} !important;
          border: 0px solid;
          min-height: 26px;
          border-radius: ${theme.theme_override.defaultTextFieldBorderRadius}px; 
          padding: 4px 4px 4px 8px; 

          .ag-picker-field-display{
            margin: 0px 4px 0px 0px;
          }

        }

        input::placeholder{
          color: ${theme.theme_override.defaultTextFieldLabel} !important;
        }

        .ag-filter-condition{
          padding-top: 8px;
          border-top: ${theme.theme_override.tableFilterMenuBorderWidth}px solid;
          border-color: ${theme.theme_override.tableFilterMenuBorder};
        }
        
        .ag-radio-button-input-wrapper {
          min-height: auto !important;
          &.ag-checked::after{
            color: ${theme.theme_override.tableCheckBoxSelectedBg};
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

  .ag-theme-material{
    font-family: ${theme.theme_override.fontFamily} !important;
    font-size: ${theme.theme_override.fontBase} !important;
  }

  .ag-theme-material.ag-dnd-ghost{
    background-color: ${theme.theme_override.tableHeaderDnDGhostBg} !important;
    height: auto !important;
    line-height: normal !important;
    margin: 0 !important;
    padding: 8px 16px !important;

    .ag-dnd-ghost-label,
    .ag-dnd-ghost-icon{
      color: ${theme.theme_override.tableHeaderDnDGhostText} !important;
    }
  }

`;
