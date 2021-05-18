import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';
import { FormHeaderRowInterface, TitleInterface, WrapperInterface } from '.';

export const Title = styled(Typography)<TitleInterface>`
  color: ${({ customVariant, theme }) => {
    if (customVariant === 'subtle') return theme.transparentInverse[600];
    if (customVariant === 'primary') return theme.primary[400];
    return theme.panelHeaderTabText;
  }};

  font-weight: ${({ theme }) => theme.fontWeightR};
  letter-spacing: ${({ theme }) => theme.letterSpacingXL};
  margin-right: 4px;
  text-transform: uppercase;
`;

export const Wrapper = styled(CssGridCell)<WrapperInterface>`
  background-color: ${({ theme }) => theme.panelHeaderBg};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  position: relative;
  z-index: 2;
  &.secondary {
    background-color: ${({ theme }) => theme.panelHeaderBg};
    ${Title} {
      color: ${({ theme }) => theme.panelHeaderTabText};
      letter-spacing: ${({ theme }) => theme.letterSpacingXL};
      text-transform: capitalize;
    }
  }

  ${({ paddingNone }) =>
    paddingNone &&
    `
    padding: 0px;
  `};
`;

export const ToolBar = styled(CssGridCell)`
  background-color: ${({ theme }) => theme.panelHeaderBg};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  position: relative;
  z-index: 2;
`;

export const InnerWrapper = styled(Grid)`
  // position: relative;
`;

export const PHLeft = styled(CssGridCell)`
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 5px;
  justify-content: flex-start;
  overflow: auto;
`;

export const PHRight = styled(CssGridCell)`
  align-items: center;
  grid-auto-flow: column;
  justify-content: flex-end;
`;

export const FHeader = styled.div<FormHeaderRowInterface>`
  background: inset
    ${({ secondary, theme }) =>
      secondary ? theme.transparentInverse[50] : null};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.8);
  justify-items: flex-start;
  ${({ variant }) => variant === 'primary' && 'justify-self: flex-start'};
  padding: 0 8px;
  z-index: 9;
`;

export const FHeaderExpansion = styled(ExpansionPanelSummary)`
  && {
    background-color: ${({ theme }) => theme.panelHeaderBg};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.8);
    justify-items: flex-start;
    padding: 0 8px;
  }
`;
