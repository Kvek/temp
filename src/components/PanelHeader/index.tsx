import {
  Divider,
  ExpansionPanelSummaryProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import Icon from '@mdi/react';

import React, { ReactNode } from 'react';

import { CssGridCell, GridCellInterface } from '../Grid';
import {
  FHeader,
  FHeaderExpansion,
  Title,
  ToolBar,
  Wrapper,
} from './PanelHeader.styles';

export interface TitleInterface extends TypographyProps {
  children: ReactNode;
  className?: string;
  customVariant?: 'subtle' | 'primary' | null;
  titleColor?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  titleVariant?: 'inherit' | Variant | undefined;
}

export interface PanelHeaderTextOnlyInterface extends TitleInterface {
  subtitle?: string;
  subtitleVariant?: 'inherit' | Variant | undefined;
}

export interface WrapperInterface extends GridCellInterface {
  paddingNone?: boolean;
}

export interface PanelHeaderInterface
  extends GridCellInterface,
    WrapperInterface {
  children?: ReactNode;
  className?: string;
  height?: string;
  innerContainerPadding?: string;
  title: string;
}

export interface HeaderRowInterface extends GridCellInterface {
  disableUnderlineBottom: boolean;
  disableUnderlineTop: boolean;
  icon: string;
  title: ReactNode;
  variant: 'inherit' | Variant | undefined | 'subHeader';
}

export interface DetailsRowInterface extends TypographyProps {
  label: string;
  value: string;
  value2: string;
}

export interface FormHeaderRowExpansionInterface
  extends ExpansionPanelSummaryProps {
  customVariant?: 'subtle' | 'primary' | null;
  icon?: string;
  title: string;
  variant?: 'inherit' | Variant | undefined;
}

export interface FormHeaderRowInterface extends GridCellInterface {
  customVariant?: 'subtle' | 'primary' | null;
  secondary: boolean;
  title?: string;
  variant?: any;
}

export const PanelHeaderTextOnly = ({
  children,
  className,
  customVariant,
  subtitle,
  subtitleVariant = 'subtitle1',
  titleColor,
  titleVariant,
}: PanelHeaderTextOnlyInterface) => (
  <CssGridCell alignCenter cell gap="2px" justifyLeft left="title" vertical>
    {subtitle && (
      <Typography
        color="textSecondary"
        style={{ alignSelf: 'flex-end' }}
        variant={subtitleVariant}>
        {subtitle}
      </Typography>
    )}

    <Title
      className={className}
      color={titleColor}
      customVariant={customVariant}
      style={subtitle ? { alignSelf: 'flex-start', lineHeight: '1em' } : {}}
      variant={titleVariant}>
      {children}
    </Title>
  </CssGridCell>
);

export const PanelHeader = ({
  children,
  className,
  height,
  innerContainerPadding,
  paddingNone,
  title,
  ...props
}: PanelHeaderInterface) => (
  <Wrapper
    alignContent="center"
    className={className}
    columns="[title] auto [content] 1fr"
    gap="0px"
    height={height || 'auto'}
    id="panel-header-wrapper"
    padding="0 0 0 8px"
    paddingNone={paddingNone}
    vertical
    width="100%"
    {...props}>
    <PanelHeaderTextOnly>{title}</PanelHeaderTextOnly>
    <CssGridCell
      cell
      columns="[left] 1fr [right] auto"
      padding={innerContainerPadding || '0 5px'}
      vertical
      {...props}>
      {children}
    </CssGridCell>
  </Wrapper>
);

export const HeaderToolbar = ({
  children,
  className,
  ...props
}: GridCellInterface) => (
  <ToolBar
    alignCenter
    cell
    className={className}
    gap="4px"
    horizontal
    justifyLeft
    {...props}>
    {children}
  </ToolBar>
);

export const PanelHeaderLeft = ({ children, ...props }: GridCellInterface) => (
  <CssGridCell
    alignContent="center"
    autoColumns="auto"
    cell
    columns="auto"
    gap="4px"
    horizontal
    justifyContent="flex-start"
    left="left"
    {...props}>
    {children}
  </CssGridCell>
);

export const PanelHeaderRight = ({ children, ...props }: GridCellInterface) => (
  <CssGridCell
    alignContent="center"
    autoColumns="auto"
    cell
    className="header-panel-controls"
    columns="auto"
    gap="4px"
    horizontal
    justifyContent="flex-end"
    left="right"
    {...props}>
    {children}
  </CssGridCell>
);

export const HeaderRow = ({
  children,
  disableUnderlineBottom,
  disableUnderlineTop,
  gap,
  icon,
  padding,
  title,
  variant,
}: HeaderRowInterface) => (
  <CssGridCell
    alignContent="center"
    gap="2px"
    rows="auto"
    style={{ minHeight: '24px' }}
    vertical
    width="100%">
    {disableUnderlineTop || variant === 'subHeader' ? null : <Divider light />}
    <CssGridCell
      alignItems="center"
      columns="auto 1fr"
      gap={gap || '4px'}
      horizontal
      justifyContent="flex-start"
      padding={variant === 'subHeader' ? '0px' : padding || '0 8px'}
      width="100%">
      <CssGridCell
        alignCenter
        autoColumns="auto"
        gap="4px"
        horizontal
        justifyLeft>
        {icon && <Icon color="white" path={icon} size={0.8} title="Request" />}
        <Typography color="textPrimary" variant="h6">
          {title}
        </Typography>
      </CssGridCell>
      <CssGridCell
        alignItems="center"
        autoColumns="auto"
        cell
        horizontal
        justifyItems="flex-end">
        {children}
      </CssGridCell>
    </CssGridCell>
    {!disableUnderlineBottom && <Divider light />}
  </CssGridCell>
);

export const DetailsRow = ({
  align,
  label,
  value,
  value2,
}: DetailsRowInterface) => (
  <CssGridCell
    alignItems="flex-start"
    autoColumns="auto"
    columns="minMax(60px, 1fr) auto"
    gap="4px"
    horizontal
    justifyContent="flex-start">
    <Typography
      className="italic"
      color="textSecondary"
      display="inline"
      noWrap
      variant="body2">
      {label}
    </Typography>
    <Typography
      align={align || 'right'}
      className="clamp4"
      noWrap
      variant="body1">
      {value}
    </Typography>
    {value2 && (
      <>
        <Typography color="textSecondary" variant="body1">
          /
        </Typography>
        <Typography variant="body1">{value2}</Typography>
      </>
    )}
  </CssGridCell>
);

export const FormHeaderRow = ({
  children,
  customVariant,
  secondary,
  title,
  variant,
}: FormHeaderRowInterface) => (
  <FHeader secondary={secondary} variant={variant}>
    <CssGridCell
      alignItems="center"
      cell
      columns="[title] auto [right] 1fr"
      gap="4px"
      horizontal
      justifyContent="flex-start">
      <Title customVariant={customVariant} variant={variant}>
        {title}
      </Title>
      <CssGridCell
        alignItems="center"
        cell
        horizontal
        justifyItems="flex-end"
        left="right">
        {children}
      </CssGridCell>
    </CssGridCell>
  </FHeader>
);

export const FormHeaderRowExpansion = ({
  customVariant,
  icon,
  title,
  variant,
  ...props
}: FormHeaderRowExpansionInterface) => (
  <FHeaderExpansion {...props}>
    <CssGridCell
      alignItems="center"
      cell
      columns="[title] auto [right] 1fr"
      gap="4px"
      horizontal
      justifyContent="flex-start">
      {icon && <Icon path={icon} size={1} style={{ marginRight: '4px' }} />}
      <Title customVariant={customVariant} variant={variant}>
        {title}
      </Title>
    </CssGridCell>
  </FHeaderExpansion>
);
