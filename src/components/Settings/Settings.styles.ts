import {
  ExpansionPanelSummary,
  Typography,
  TypographyProps,
} from '@material-ui/core';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';

export const SHeaderExpansion = styled(ExpansionPanelSummary)`
  && {
    background-color: ${({ theme }) => theme.settingsExpansionSummaryBg};
    border-bottom: ${({ theme }) => theme.settingsExpansionSummaryBorderWidth}px
      solid ${({ theme }) => theme.settingsExpansionSummaryBorder};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.8);
    justify-items: flex-start;
    padding: 0 8px;
  }
`;

export const SHeaderTitle = styled(Typography)<TypographyProps>`
  && {
    color: ${({ theme }) => theme.settingsExpansionSummaryText};
    font-weight: ${({ theme }) => theme.fontWeightR};
    letter-spacing: ${({ theme }) => theme.letterSpacingXL};
    margin-right: 4px;
    text-transform: uppercase;
    & svg path {
      fill: ${({ theme }) => theme.settingsExpansionSummaryText} !important;
    }
  }
`;

export const SettingsRowContainer = styled(CssGridCell)`
  && {
    background-color: ${({ theme }) => theme.settingsRowBg};
    min-height: 35px;
    & hr {
      background-color: ${({ theme }) => theme.settingsRowBorder} !important;
      height: ${({ theme }) => theme.settingsRowBorderWidth}px !important;
    }
  }
`;

export const SettingsRowTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.settingsRowText};
  }
`;
