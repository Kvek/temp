import { GridProps } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React, { FC, ReactNode } from 'react';
import { SplitterLayoutProps } from 'react-splitter-layout';

import { DeleteButton } from '../Button';
import { ButtonBar } from '../ButtonBar';
import { ExpansionPanel } from '../ExpansionPanel';
import { CssGridCell, GridCellInterface } from '../Grid';
import {
  FormHeaderRow,
  FormHeaderRowExpansion,
  PanelHeader,
  PanelHeaderInterface,
} from '../PanelHeader';
import {
  AppPanelContainer,
  CollapsePanel,
  FGroupContainerExpansion,
  FGroupPanelExpansion,
  FlexPanelContainer,
  FormContentPanel,
  MultiEditPanelHeader,
  PanelContainer,
  Shadow,
  SplitPanel as SplitterPanel,
  SubPanelContainer,
  TabContainer,
} from './Panels.styles';

export interface AppPanelInterface extends GridProps {}

export interface PanelInterface extends GridCellInterface {
  table?: string;
}

export interface FormGroupPanelInterface extends GridCellInterface {
  secondary: boolean;
  title: string;
}

export interface FormGroupPanelExpansionInterface extends GridCellInterface {
  defaultExpanded: boolean;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
  title: string;
}

export interface MultiEditPanelHeaderInterface extends PanelHeaderInterface {
  secondary: boolean;
}

export interface MultiEditInterface
  extends GridCellInterface,
    MultiEditPanelHeaderInterface {}

export interface ShadowInterface {
  shadowDirection: 'top' | 'bottom' | 'right';
}

export interface SubPanelInterface extends ShadowInterface {
  buttons: ReactNode;
  children: ReactNode;
  className: string;
  headerHeight: string;
  noShadow: boolean;
  title: string;
}

export const TabPanel: FC<GridCellInterface> = (props) => (
  <TabContainer gap="4px" {...props} />
);

export const AppPanel: FC<AppPanelInterface> = (props) => (
  <AppPanelContainer
    alignItems="stretch"
    container
    direction="column"
    style={{ height: '100%' }}
    wrap="nowrap"
    {...props}
  />
);

export const Panel: FC<PanelInterface> = (props) => (
  <PanelContainer
    alignContent="flex-start"
    cell
    columns="auto"
    gap="0px"
    rows="auto"
    {...props}
  />
);

export const FormGroupPanel: FC<FormGroupPanelInterface> = ({
  children,
  secondary,
  title,
  ...props
}) => (
  <CssGridCell cell gap="0px" rows="auto 1fr">
    <FormHeaderRow secondary={secondary} title={title} />
    <FormContentPanel
      alignContent="flex-start"
      cell
      gap="0px 8px"
      padding="8px"
      vertical
      {...props}>
      {children}
    </FormContentPanel>
  </CssGridCell>
);

export const FormGroupPanelExpansion: FC<FormGroupPanelExpansionInterface> = ({
  children,
  defaultExpanded,
  expanded,
  onChange,
  title,
  ...props
}) => (
  <FGroupPanelExpansion
    defaultExpanded={defaultExpanded}
    expanded={expanded}
    onChange={onChange}
    square>
    <FormHeaderRowExpansion
      expandIcon={<ExpandMoreIcon />}
      id={title}
      title={title}
    />
    <FGroupContainerExpansion>
      <CssGridCell
        alignContent="flex-start"
        cell
        gap="0px 8px"
        padding="8px"
        vertical
        {...props}>
        {children}
      </CssGridCell>
    </FGroupContainerExpansion>
  </FGroupPanelExpansion>
);

export const SubPanel = ({
  buttons,
  children,
  className,
  headerHeight,
  noShadow,
  shadowDirection,
  title,
  ...props
}: SubPanelInterface) => (
  <SubPanelContainer
    alignContent="flex-start"
    cell
    columns="1fr"
    gap="0px"
    rows="auto 1fr">
    <PanelHeader
      className={className}
      height={headerHeight}
      style={{ zIndex: 1 }}
      title={title}>
      {buttons}
    </PanelHeader>
    <CssGridCell cell gap="16px" rows="[main-content] 1fr" vertical {...props}>
      {children}
    </CssGridCell>
    {noShadow ? null : (
      <Shadow id="inner-shadow" shadowDirection={shadowDirection} />
    )}
  </SubPanelContainer>
);

export const CollapseContainer: FC<GridCellInterface> = (props) => (
  <CollapsePanel cell id="CollapseContainer" {...props} />
);

export const SubShadow = ({ shadowDirection }: ShadowInterface) => (
  <Shadow id="inner-shadow" shadowDirection={shadowDirection} />
);

export const SplitPanel: FC<SplitterLayoutProps> = (props) => (
  <SplitterPanel {...props} />
);

export const FlexLayoutPanel: FC<GridProps> = (props) => (
  <FlexPanelContainer
    alignContent="center"
    alignItems="stretch"
    container
    direction="row"
    id="FlexLayoutPanel"
    justify="center"
    {...props}
  />
);

export const MultiEdit = ({
  children,
  secondary,
  ...props
}: MultiEditInterface) => (
  <ExpansionPanel className="multiple-edit" gap="0px" height="auto" vertical>
    <MultiEditPanelHeader secondary={secondary} title="Multiple Edit" />
    <CssGridCell
      alignContent="center"
      columns="1fr auto"
      flow="columns"
      gap="8px"
      padding="8px"
      {...props}>
      {children}
    </CssGridCell>
    <ButtonBar columns="auto 1fr">
      <DeleteButton size="medium" />
      <CssGridCell
        autoColumns="auto"
        columns="auto"
        gap="8px"
        horizontal
        justifyContent="flex-end"
        justifyItems="flex-end">
        <MuiButton color="primary" size="large">
          Update
        </MuiButton>
      </CssGridCell>
    </ButtonBar>
  </ExpansionPanel>
);
