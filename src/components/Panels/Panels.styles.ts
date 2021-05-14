import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import { Theme, ThemeOptions, withStyles } from '@material-ui/core/styles';
import { createStyles, Styles } from '@material-ui/styles';

import SplitterLayout from 'react-splitter-layout';

import styled from 'styled-components';

import { CssGridCell } from '../Grid';
import { PanelHeader } from '../PanelHeader';
import {
  MultiEditPanelHeaderInterface,
  PanelInterface,
  ShadowInterface,
} from '.';

export const MultiEditPanelHeader = styled(PanelHeader)<
  MultiEditPanelHeaderInterface
>`
  && {
    background: inset
      ${({ secondary }) => {
        if (secondary) return ({ theme }) => theme.transparentInverse[50];
        return null;
      }};
  }
`;

export const FormContentPanel = styled(CssGridCell)`
  && {
    background: ${({ theme }) => theme.transparent[200]};
  }
`;

export const TabContainer = styled(CssGridCell)`
  && {
    background: ${({ theme }) => theme.black.A200};
    border: ${({ theme }) => theme.appPanel_spacing} solid
      ${({ theme }) => theme.black[800]};
    position: relative;
  }
`;

export const AppPanelContainer = styled(Grid)`
  && {
    background: ${({ theme }) => theme.appBg};
  }
`;

export const FlexPanelContainer = styled(Grid)`
  && {
    background: ${({ theme }) => theme.layoutTabBg};
    height: 100%;
    width: 100%;
  }
`;

export const PanelContainer = styled(CssGridCell)<PanelInterface>`
  && {
    background: ${({ theme }) => theme.layoutTabBg};

    ${({ table }) =>
      table &&
      `
      grid-template-rows: [header] auto [table] 1fr [footer] auto;
      grid-template-columns: auto;
      grid-auto-flow: columns;
      grid-gap: 0px;
      align-content: flex-start;
      width: 100%;
      position: absolute;
    `};
  }
`;

export const FormPanelContainer = styled(CssGridCell)`
  && {
    background: ${({ theme }) => theme.transparent[200]};
  }
`;

export const SubPanelContainer = styled(PanelContainer)`
  && {
    background: ${({ theme }) => theme.subPanelBg};
    border: ${({ theme }) => theme.subPanelBorderWidth}px solid
      ${({ theme }) => theme.subPanelBorder};
  }
`;

export const CollapsePanel = styled(CssGridCell)`
  && {
    background: ${({ theme }) => theme.collapsePanelBg};
    width: 100%;
  }
`;

export const styledPanelExpansion = (theme: ThemeOptions) =>
  createStyles({
    root: {
      backgroundColor: theme.variables.black[900],
    },
  });

export const FGroupPanelExpansion = withStyles(
  styledPanelExpansion as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(ExpansionPanel);

export const StyledGroupContainerExpansion = (theme: ThemeOptions) =>
  createStyles({
    root: {
      backgroundColor: theme.variables.transparent[200],
      height: 'calc(100% - 30px)',
      padding: '0',
      position: 'absolute',
      width: '100%',
    },
  });

export const FGroupContainerExpansion = withStyles(
  StyledGroupContainerExpansion as Styles<Theme, {}, string>,
  {
    withTheme: true,
  }
)(ExpansionPanelDetails);

export const Shadow = styled.div<ShadowInterface>`
  && {
    box-shadow: inset
      ${({ shadowDirection }) => {
        if (shadowDirection === 'top') return '0 7px 9px -7px rgba(0,0,0,0.7)';
        if (shadowDirection === 'bottom') {
          return '0 -7px 9px -7px rgba(0,0,0,0.7)';
        }
        if (shadowDirection === 'right') {
          return '-7px 0 9px -7px rgba(0,0,0,0.7)';
        }
        return '7px 0 9px -7px rgba(0,0,0,0.7)';
      }};
    height: 100%;
    pointer-events: none;
    position: absolute;
    width: 100%;

    z-index: 9;
  }
`;

export const SplitPanel = styled(SplitterLayout)`
  && {
    .closed .layout-pane:last-child {
      overflow: hidden;
      transition: width 0.2s ease;
      width: 0px !important;
    }
  }
`;
